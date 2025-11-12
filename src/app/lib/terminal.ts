import axios from "axios"
import { API_BASE, API_KEY } from "./custom-export"
import { format, subDays, subMonths } from "date-fns";



export const liveCurrencyPrice = async (fetchCurr: string[]) => {
  try {
    if (!Array.isArray(fetchCurr) || fetchCurr.length === 0) return [];
    const currencies = fetchCurr.join(",");
    const { data } = await axios.get(`${API_BASE}/live`, { params: { currency: currencies, api_key: API_KEY, }, });
    if (!data || !Array.isArray(data.quotes)) {
      console.warn("Unexpected API response format:", data);
      return [];
    }

    return data.quotes.map((item: any) => {
      const bid = Number(item.bid) || 0;
      const ask = Number(item.ask) || 0;
      const mid = Number(item.mid) || (bid + ask) / 2 || 1; // fallback if mid not provided
      const spreadPercent = mid ? ((ask - bid) / mid) * 100 : 0;

      return {
        symbol: `${item.base_currency}${item.quote_currency}`,
        bid,
        ask,
        change: spreadPercent.toFixed(2),
      };
    });
  } catch (err) {
    console.error("liveCurrencyPrice fetch error:", err);
    return [];
  }
};


export async function fetchMergedCurrencyPrice(
  symbol: string = "",
  interval: string = "1H",
  chartType: "candlestick" | "bar" | "line" | "area" = "candlestick"
) {
  if (!symbol) return [];

  // 🕒 Interval configurations
  const intervals: Record<
    string,
    { type: string; period: number; start: () => string; end: () => string }
  > = {
    "1M": {
      type: "minute",
      period: 1,
      start: () => format(subDays(new Date(), 2), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "5M": {
      type: "minute",
      period: 5,
      start: () => format(subDays(new Date(), 2), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "15M": {
      type: "minute",
      period: 15,
      start: () => format(subDays(new Date(), 2), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "30M": {
      type: "minute",
      period: 30,
      start: () => format(subDays(new Date(), 2), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "1H": {
      type: "hourly",
      period: 1,
      start: () => format(subDays(new Date(), 30), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "4H": {
      type: "hourly",
      period: 4,
      start: () => format(subDays(new Date(), 30), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "1D": {
      type: "daily",
      period: 1,
      start: () => format(subMonths(new Date(), 3), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "1W": {
      type: "daily",
      period: 6,
      start: () => format(subMonths(new Date(), 3), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
    "MN": {
      type: "daily",
      period: 30,
      start: () => format(subMonths(new Date(), 12), "yyyy-MM-dd"),
      end: () => format(new Date(), "yyyy-MM-dd"),
    },
  };

  const { type: intervalType, period, start, end } =
    intervals[interval] || intervals["1H"];

  const start_date = start();
  const end_date = end();

  try {
    // ⚡ Parallel API calls
    const [historyRes, liveRes] = await Promise.all([
      axios.get(`${API_BASE}timeseries`, {
        params: {
          api_key: API_KEY,
          currency: symbol,
          start_date,
          end_date,
          interval: intervalType,
          period,
          format: "records",
        },
      }),
      axios.get(`${API_BASE}live`, {
        params: { api_key: API_KEY, currency: symbol },
      }),
    ]);

    const historical = historyRes.data?.quotes ?? [];
    const liveRecord = liveRes.data?.quotes?.[0];
    const liveTimestamp = liveRes.data?.timestamp;

    // 🧩 Merge live data (append latest quote)
    if (liveRecord && liveTimestamp) {
      historical.push({
        date: format(new Date(liveTimestamp * 1000), "yyyy-MM-dd HH:mm:ss"),
        open: liveRecord.bid,
        high: liveRecord.ask,
        low: liveRecord.bid,
        close: liveRecord.mid,
      });
    }

    // 🔄 Normalize data for Lightweight Charts
    const mapFn =
      chartType === "line" || chartType === "area"
        ? (q: any) => ({
            time: Math.floor(new Date(q.date).getTime() / 1000),
            value: +q.close,
          })
        : (q: any) => ({
            time: Math.floor(new Date(q.date).getTime() / 1000),
            open: +q.open,
            high: +q.high,
            low: +q.low,
            close: +q.close,
          });

    return historical.map(mapFn);
  } catch (error) {
    console.error("❌ Error fetching merged candles:", error);
    return [];
  }
}


export const fetchLiveValue = async (symbol: string) => {
  try {
    const { data } = await axios.get(`${API_BASE}/live`, {
      params: {
        api_key: API_KEY,
        currency: symbol,
      },
    });

    const liveRecord = data?.quotes?.[0];
    const liveTimestamp = data?.timestamp;

    if (!liveRecord) {
      console.warn("⚠️ No live record found for", symbol);
      return null;
    }

    return {
      date: format(new Date(liveTimestamp * 1000), "yyyy-MM-dd HH:mm:ss"),
      open: liveRecord.bid,
      high: liveRecord.ask,
      low: liveRecord.bid,
      close: liveRecord.mid,
    };
  } catch (error) {
    console.error("❌ Error fetching live:", error);
    return null;
  }
};


export const fetchLiveRecord = async (symbol: string) => {
  try {
    const { data } = await axios.get(`${API_BASE}/live`, {
      params: {
        api_key: API_KEY,
        currency: symbol,
      },
    });

    const liveRecord = data?.quotes;
    if (!liveRecord) {
      console.warn("⚠️ No live record found for", symbol);
      return null;
    }
    return liveRecord;
  } catch (error) {
    console.error("❌ Error fetching live:", error);
    return null;
  }
};
// // lib/api.ts
// import axios from "axios";

const API_BASE = "https://marketdata.tradermade.com/api/v1";

import axios from "axios";
import { format, subDays, subMonths, subWeeks, subYears, subHours } from "date-fns";

const API_KEY = "09a9AbeLiRNrOmNo6P7V";

export async function fetchCandles(
  symbol: string,
  interval: string = "H1",
  chartType: string = "candlestick"
) {
  // let start_date: string;
  // const end_date = format(new Date(), "yyyy-MM-dd-HH:mm");

  // let intervalType = "minute";
  // let period = 1;

  // // Adjust date range by interval
  // switch (interval) {
  //   case "M1":
  //     intervalType = "minute";
  //     period = 1;
  //     start_date = format(subDays(new Date(), 3), "yyyy-MM-dd-HH:mm");
  //     break;
  //   case "M5":
  //     intervalType = "minute";
  //     period = 5;
  //     start_date = format(subDays(new Date(), 7), "yyyy-MM-dd-HH:mm");
  //     break;
  //   case "M15":
  //     intervalType = "minute";
  //     period = 15;
  //     start_date = format(subDays(new Date(), 10), "yyyy-MM-dd-HH:mm");
  //     break;
  //   case "M30":
  //     intervalType = "minute";
  //     period = 30;
  //     start_date = format(subDays(new Date(), 15), "yyyy-MM-dd-HH:mm");
  //     break;
  //   case "H1":
  //     intervalType = "hourly";
  //     period = 1;
  //     start_date = format(subDays(new Date(), 30), "yyyy-MM-dd-HH:mm");
  //     break;
  //   case "H4":
  //     intervalType = "hourly";
  //     period = 4;
  //     start_date = format(subDays(new Date(), 60), "yyyy-MM-dd-HH:mm");
  //     break;
  //   case "D1":
  //     intervalType = "daily";
  //     period = 1;
  //     start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd");
  //     break;
  //   case "W1":
  //     intervalType = "daily";
  //     period = 7;
  //     start_date = format(subMonths(new Date(), 6), "yyyy-MM-dd");
  //     break;
  //   case "MN":
  //     intervalType = "daily";
  //     period = 30;
  //     start_date = format(subMonths(new Date(), 12), "yyyy-MM-dd");
  //     break;
  //   default:
  //     start_date = format(subDays(new Date(), 30), "yyyy-MM-dd-HH:mm");
  //     break;
  // }

    let start_date = format(subDays(new Date(), 2), "yyyy-MM-dd");
  const end_date = format(new Date(), "yyyy-MM-dd");

  // Determine interval type and period
  let intervalType = "minute";
  let period = 1;

  switch (interval) {
    case "M1":
      intervalType = "minute";
      period = 1;
      // start_date = format(subMonths(new Date(), 1), "yyyy-MM-dd-HH:mm");
      break;
    case "M5":
      intervalType = "minute";
      period = 5;
      // start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd-HH:mm");
      break;
    case "M15":
      intervalType = "minute";
      period = 15;
      // start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd-HH:mm");
      break;
    case "M30":
      intervalType = "minute";
      period = 30;
      // start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd-HH:mm");
      break;
    case "H1":
      intervalType = "hourly";
      period = 1;
      // start_date = format(subMonths(new Date(), 1), "yyyy-MM-dd");
      start_date = format(subDays(new Date(), 30), "yyyy-MM-dd");
      break;
    case "H4":
      intervalType = "hourly";
      period = 4;
      start_date = format(subDays(new Date(), 30), "yyyy-MM-dd");
      break;
    case "D1":
      intervalType = "hourly";
      period = 1;
      start_date = format(subDays(new Date(), 30), "yyyy-MM-dd");
      // start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd-HH:mm");
      break;
    case "W1":
      intervalType = "hourly";
      period = 1;
       start_date = format(subDays(new Date(), 30), "yyyy-MM-dd");
      // start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd");
      break;
    case "MN":
      intervalType = "daily";
      period = 1;
      start_date = format(subMonths(new Date(), 3), "yyyy-MM-dd");
      break;
  }

  // ✅ Build final API URL
  const url = `${API_BASE}/timeseries?api_key=${API_KEY}&currency=${symbol}&start_date=${start_date}&end_date=${end_date}&interval=${intervalType}&period=${period}&format=records`;

  try {
    const res = await axios.get(url);
    const quotes = res.data?.quotes || [];

    // ✅ Transform API data based on chart type
    switch (chartType) {
      case "area":
      case "line":
        // Area/Line chart: single value (close)
        return quotes.map((q: any) => ({
          time: Math.floor(new Date(q.date).getTime() / 1000),
          value: q.close,
        }));

      case "bar":
      case "candlestick":
      case "heikinAshi":
      default:
        // OHLC chart: full structure
        return quotes.map((q: any) => ({
          time: Math.floor(new Date(q.date).getTime() / 1000),
          open: q.open,
          high: q.high,
          low: q.low,
          close: q.close,
        }));
    }
  } catch (error) {
    console.error("❌ Error fetching candles:", error);
    return [];
  }
}


// Currency*******************************
export interface MarketData {
  symbol: string;
  bid: number;
  ask: number;
  change: number;
}

export async function getMarketData(fetchCurr: string[]):Promise<MarketData[]> {
  try {
    if (!fetchCurr.length) return [];
     const currencies = fetchCurr.join(",");
    const { data } = await axios.get(`${API_BASE}/live`, {
      params: {
        currency: currencies,
        api_key: API_KEY,
      },
    });

    // Normalize data format
    return data.quotes.map((item: any) => {
      const bid = item.bid || 0;
      const ask = item.ask || 0;
      const mid = item.mid || 0;
      // const mid = (bid + ask) / 2;

      // Spread percentage
      const spreadPercent = ((ask - bid) / mid) * 100;
      return {
        symbol: item.base_currency+item.quote_currency,
        bid,
        ask,
        change: spreadPercent.toFixed(2), // or item.change_percent if available
      };
    });

  } catch (err) {
    console.error("TradeMade fetch error", err);
    return [];
  }
}


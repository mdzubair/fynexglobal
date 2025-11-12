import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChartState = {
  symbol: string;
  type: string;
  interval: string;
};

const initialState: ChartState = {
  symbol: "",
  type: "",
  interval: "",
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    addNewChartSymbol: (state, action: PayloadAction<{ symbol: string }>) => {
      state.symbol = action.payload.symbol;
      if (typeof window !== "undefined") {
        localStorage.setItem("chartSymbol", action.payload.symbol);
      }
    },
    addNewChartType: (state, action: PayloadAction<{ type: string }>) => {
      state.type = action.payload.type;
      if (typeof window !== "undefined") {
        localStorage.setItem("chartType", action.payload.type);
      }
    },
    addNewChartInterval: (
      state,
      action: PayloadAction<{ interval: string }>
    ) => {
      state.interval = action.payload.interval;
      if (typeof window !== "undefined") {
        localStorage.setItem("chartInterval", action.payload.interval);
      }
    },
  },
});

export const {
  addNewChartSymbol,
  addNewChartType,
  addNewChartInterval,
} = chartSlice.actions;

export default chartSlice.reducer;

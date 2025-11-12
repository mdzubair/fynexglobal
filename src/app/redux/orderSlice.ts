import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Order = {
  orderType: "buy" | "sale";
  symbol: string;
  volume: number;
  high?: number | null;
  low?: number | null;
  timestamp: string;
};

interface OrderState {
  orders: Order[];
}

// ✅ Load from localStorage if exists
const savedOrders =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("orders") || "[]")
    : [];

const initialState: OrderState = {
  orders: savedOrders,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (
      state,
      action: PayloadAction<{
        orderType: "buy" | "sale";
        symbol: string;
        high?: number | null;
        low?: number | null;
        volume: number;
      }>
    ) => {
      // ✅ Add new order to existing list
      const newOrder = {
        orderType: action.payload.orderType,
        symbol: action.payload.symbol,
        volume: action.payload.volume,
        high: action.payload.high,
        low: action.payload.low,
        timestamp: new Date().toISOString(),
      };

      state.orders.push(newOrder);

      // ✅ Persist to localStorage
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    clearOrders: (state) => {
      state.orders = [];
      localStorage.removeItem("orders");
    },
  },
});

export const { createOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;

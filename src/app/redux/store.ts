
import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import chartSlice from "./chartSlice";

export const store = configureStore({
  reducer: {
    ordersReducer:orderSlice,
    chartData:chartSlice
  },
});

// ✅ Type helpers for useSelector & useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

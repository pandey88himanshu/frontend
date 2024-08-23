// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

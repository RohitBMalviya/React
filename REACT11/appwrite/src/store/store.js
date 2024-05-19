import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";

const store = configureStore({ reducer: authSlice });

export default store;

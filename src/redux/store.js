import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSliceReducer } from "./authSlice";
import { todaySlice } from "./todaySlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated", "user", "token"],
};

export const store = configureStore({
  reducer: {
    portions: todaySlice.reducer,
    auth: persistReducer(authPersistConfig, authSliceReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

export const persistor = persistStore(store);

export default store;

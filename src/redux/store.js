import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSliceReducer } from "./auth/authSlice";
import { todayReducer } from "./water/todaySlice";
import { userReducer } from "./user/userSlice";

const authPersistConfig = {
   key: "auth",
   storage,
   whitelist: ["token"],
};

export const store = configureStore({
   reducer: {
      water: todayReducer,
      auth: persistReducer(authPersistConfig, authSliceReducer),
      users: userReducer,
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

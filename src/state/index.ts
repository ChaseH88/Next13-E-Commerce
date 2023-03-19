import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { authApi } from "./slices/auth";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware: Middleware[] = [authApi.middleware];
    return getDefaultMiddleware().concat(middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };

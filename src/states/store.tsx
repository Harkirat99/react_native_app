import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer
} from 'redux-persist';
import reduxStorage from './storage';
import rootReducer from './rootReducer';


const preseistConfig = {
    key: "root",
    storage: reduxStorage,
    blackList: [],
    whiteList: ["user", "cart"]
}

const presistReducer = persistReducer(preseistConfig, rootReducer)

export const store = configureStore({
  reducer: [presistReducer],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, REHYDRATE, PURGE],
      },
    }),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


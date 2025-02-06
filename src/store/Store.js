import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from "./AuthSlice" // Import the reducer
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';


const RootReducers = combineReducers({
  auth: authReducer, 
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, RootReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export default store;
export const persistor = persistStore(store);

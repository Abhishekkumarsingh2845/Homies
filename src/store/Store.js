import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from "./AuthSlice"; 
import locationSlice from './LocationSlice';
import getPropertiesSlice from "./PropertiesSlice"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';


const RootReducers = combineReducers({
  auth: authReducer,
  location :  locationSlice,
  getPropertiesSlice : getPropertiesSlice
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

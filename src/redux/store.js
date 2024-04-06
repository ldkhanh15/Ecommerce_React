import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { encryptTransform } from 'redux-persist-transform-encrypt'
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: 'MY_SECRET_KEY',
  //     onError: function (error) {

  //     }
  //   })
  // ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store =configureStore({
  reducer:persistedReducer
})
export const persistor = persistStore(store)
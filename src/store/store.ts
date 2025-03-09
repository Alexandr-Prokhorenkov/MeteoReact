import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currenWeatherSlice'
import weatherForecastSliceReducer from "./slices/weatherForecastSlice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  weatherForecastSliceReducer

})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
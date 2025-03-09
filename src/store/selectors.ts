import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) => state.currentWeatherSliceReducer

export const selectForecast = (state: RootState) => state.weatherForecastSliceReducer
import { WeatherService } from "../../services/WeatherService";
import { weatherForecastSlice } from "../slices/weatherForecastSlice";
import { AppDispatch } from "../store";

export const fetchWeatherForecast = (city: string, days: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherForecastSlice.actions.fetchWeatherForecast());
    const res = await WeatherService.getWeatherForecast(city, days);
    if (res.status === 200) {
      dispatch(weatherForecastSlice.actions.fetchWeatherForecastSuccess(res));
    } else {
      dispatch(weatherForecastSlice.actions.fetchWeatherForecastError(res));
    }
  } catch (error) {
    console.log(error);
  }
};

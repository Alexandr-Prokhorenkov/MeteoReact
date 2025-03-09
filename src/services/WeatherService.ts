import { AxiosResponse } from "axios";
import { ForecastWeather, Weather } from "../store/types/types";
import { openWeatherApi, weatherApi } from "../axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return openWeatherApi.get<Weather>(`/weather?q=${city}`)
  }

  static getWeatherForecast(city: string, days: number): Promise<AxiosResponse<ForecastWeather>> {
    return weatherApi.get<ForecastWeather>(`/forecast.json`, {
      params: { q: city, days, aqi: "no", alerts: "no" }
    });
  }
}

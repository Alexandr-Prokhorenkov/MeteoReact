import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ForecastWeather } from "../types/types";

type ForecastResponse = {
  status: number;
  message: string;
};

type ForecastState = {
  forecast: ForecastWeather | null;
  isLoading: boolean;
  response: ForecastResponse;
};

const initialState: ForecastState = {
  forecast: null,
  isLoading: false,
  response: { status: 0, message: "" },
};

export const weatherForecastSlice = createSlice({
  name: "weather_forecast",
  initialState,
  reducers: {
    fetchWeatherForecast(state) {
      state.isLoading = true;
    },
    fetchWeatherForecastSuccess(state, action: PayloadAction<AxiosResponse<ForecastWeather>>) {
      state.forecast = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchWeatherForecastError(state, action: PayloadAction<AxiosResponse<ForecastWeather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const { fetchWeatherForecast, fetchWeatherForecastSuccess, fetchWeatherForecastError } =
  weatherForecastSlice.actions;

export default weatherForecastSlice.reducer;

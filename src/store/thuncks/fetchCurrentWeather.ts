import { WeatherService } from "../../services/WeatherService";
import { currentWeatherSlice } from "../slices/currenWeatherSlice";
import { AppDispath } from "../store";

export const fetchCurrentWeather = (payload: string) => async(dispatch: AppDispath) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
    const res = await WeatherService.getCurrentWeather(payload)
    if (res.status === 200) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSucces(res))
    }
    else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
    }
  }
  catch(error) {
    console.log(error)
  }
}
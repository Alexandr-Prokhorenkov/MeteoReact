import axios from "axios";

const openWeatherApi = axios.create({
  baseURL: import.meta.env.VITE_OPENWEATHER_BASE_URL
})

openWeatherApi.interceptors.request.use(config => {
  config.url = config.url + "&units=metric" +  "&appid=" + import.meta.env.VITE_OPENWEATHER_API_KEY
  return config
})

const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_WEATHERAPI_BASE_URL
})

weatherApi.interceptors.request.use(config => {
  config.url = config.url + "?key=" + import.meta.env.VITE_WEATHERAPI_KEY + "&lang=ru"
  return config
})

export { openWeatherApi, weatherApi };

export type Weather = {
  coord: {
    lon: number,
    lat: number
},
  weather: [
    {
        main: string,
        description: string,
    }
],
  main: {
    temp: number
    feels_like: number
    pressure: number
  }

  clouds: {
    all: number
  }
  wind: {
    speed: number,
    deg: number,
    gust: number
},
}

export type ForecastDay = {
  date: string
  day: {
    maxtemp_c: number
    mintemp_c: number
    condition: {
      text: string
    }
    maxwind_kph: number

  }
  hour: [
    {
      pressure_in: number

    }
  ]
}

export type ForecastWeather = {
  forecast: {
    forecastday: ForecastDay[]
  }
}
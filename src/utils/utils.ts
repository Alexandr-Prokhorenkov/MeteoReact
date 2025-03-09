const cityTimeZones: { [key: string]: string } = {
  Moscow: "Europe/Moscow",
  Rostov: "Europe/Moscow",
  Krasnodar: "Europe/Moscow",
  Paris: "Europe/Paris",
  Vladivostok: "Asia/Vladivostok", // Добавили Владивосток
};

/**
 * Получает текущее время в часовом поясе выбранного города.
 * @param city Название города (например, "Moscow")
 * @returns Текущее время в формате "ЧЧ:ММ:СС"
 */
export const getCurrentTime = (city: string): string => {
  const timeZone = cityTimeZones[city] || "UTC"; // Если город не найден, используем UTC
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // Добавляем секунды
    timeZone,
  }).format(new Date());
};



export const getCloudinessDescription = (clouds: number): string => {
  if (clouds <= 10) return "sun";
  if (clouds <= 30) return "sun_small_clouds";
  if (clouds <= 60) return "cloudy";
  if (clouds <= 99) return "small_rain_sun";
  return "cloudy";
};


export const getPressureDescription = (pressure: number): string => {
  if (pressure < 1000) return "пониженное";
  if (pressure >= 1000 && pressure <= 1020) return "нормальное";
  return "повышенное";
};


export const getWindDirection = (deg: number) => {
  const directions = [
      "северный", "северо-восток", "восток", "юго-восток",
      "юг", "юго-запад", "запад", "северо-запад"
  ];
  
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}


export const getWindDescription = (speed: number) => {
  if (speed <= 0.2) return "безветренно";
  if (speed <= 1.5) return "тихий ветер";
  if (speed <= 3.3) return "лёгкий ветер";
  if (speed <= 5.4) return "слабый ветер";
  if (speed <= 7.9) return "умеренный ветер";
  return "сильный ветер";
}

export const translateWeather = (description: string) => {
  const translations: { [key: string]: string } = {
    "clear sky": "ясное небо",
    "few clouds": "малооблачно",
    "scattered clouds": "рассеянные облака",
    "broken clouds": "облачно с прояснениями",
    "overcast clouds": "пасмурно",
  };

  return translations[description] || "Неизвестное описание";
};


export const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return "Сегодня";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Завтра";
  } else {
    const dayOfWeek = date.toLocaleDateString("ru-RU", { weekday: "short" });
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  }
};


export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
};


export const weatherIconMap: { [key: string]: string } = {
  "солнечно": "sun",
  "переменная облачность": "cloudy",
  "облачно": "cloudy",
  "местами дождь": "small_rain_sun",
  "умеренный дождь": "rain",
  "слабый переохлажденный дождь": "rain",
  "пасмурно": "rain",
  "гроза": "thunderstorm",
  "дымка": "dymka",
  "местами умеренный снег": "snow",
};

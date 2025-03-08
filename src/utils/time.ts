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
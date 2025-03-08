import styles from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/icons/cloud.png";
import { ThisDayItem } from "./ThisDayItem/ThisDayItem";
import { Weather } from "../../../../store/types/types";
import { getPressureDescription } from "../../../../utils/time";

interface Props {
  weather: Weather;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp-icon",
      name: "Температура",
      value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
    },
    {
      icon_id: "pressure-icon",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба - ${getPressureDescription(weather.main.pressure)}`,
    },
    {
      icon_id: "precipitation-icon",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind-icon",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={styles.thisDayInfo}>
      {items.map((item) => (
        <ThisDayItem
          key={item.name}
          icon_id={item.icon_id}
          name={item.name}
          value={item.value}
        />
      ))}

      <img className={styles.cloud} src={cloud} alt="облако" />
    </div>
  );
};

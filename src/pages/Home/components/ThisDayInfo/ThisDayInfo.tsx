import React from "react";
import styles from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/icons/cloud.png";
import { ThisDayItem } from "./ThisDayItem/ThisDayItem";

export const ThisDayInfo: React.FC = () => {
  const items = [
    {
      icon_id: "temp-icon",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure-icon",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
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
          icon_id={item.icon_id}
          name={item.name}
          value={item.value}
        />
      ))}

      <img className={styles.cloud} src={cloud} alt="облако" />
    </div>
  );
};

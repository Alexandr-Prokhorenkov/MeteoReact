import React from "react";
import styles from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

export interface IDay {
  dayName: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days: React.FC = () => {
  const days: IDay[] = [
    {
      dayName: "Сегодня",
      day_info: "28 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      dayName: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain",
      temp_day: "+15",
      temp_night: "+10",
      info: "Небольшой дождь",
    },
    {
      dayName: "Пн",
      day_info: "30 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      dayName: "Вт",
      day_info: "31 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      dayName: "Ср",
      day_info: "1 сент",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      dayName: "Чт",
      day_info: "2 сент",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      dayName: "Пт",
      day_info: "3 сент",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Tabs/>
      <div className={styles.days}>
        {days.map((day) => (
          <Card key={day.dayName} day={day} />
        ))}
      </div>
    </>
  );
};

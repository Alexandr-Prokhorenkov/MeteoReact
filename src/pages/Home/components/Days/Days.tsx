import React from "react";
import styles from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import { week } from "./contsants";

export interface IDay {
  dayName: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days: React.FC = () => {

  return (
    <>
      <Tabs/>
      <div className={styles.days}>
        {week.map((day) => (
          <Card key={day.dayName} day={day} />
        ))}
      </div>
    </>
  );
};

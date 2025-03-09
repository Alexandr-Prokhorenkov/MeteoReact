import React from "react";
import styles from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import { selectForecast } from "../../../../store/selectors";
import { useCustomSelector } from "../../../../hooks/store";

export const Days: React.FC = () => {
  const { forecast } = useCustomSelector(selectForecast);

  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {forecast?.forecast.forecastday.map((dayData) => (
          <Card
            key={dayData.date}
            day={{
              date: dayData.date,
              day: {
                maxtemp_c: dayData.day.maxtemp_c,
                mintemp_c: dayData.day.mintemp_c,
                condition: dayData.day.condition,
              },
            }}
          />
        ))}
      </div>
    </>
  );
};

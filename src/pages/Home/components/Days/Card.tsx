import { FC } from "react";
import styles from "./Days.module.scss";
import { GlobalSvgSelector } from "../../../../assets/images/icons/GlobalSvgSelector";
import { formatDate, getDayOfWeek, weatherIconMap } from "../../../../utils/utils";

export interface IDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
    };
  };
}

interface CardProps {
  day: IDay;
}

export const Card: FC<CardProps> = ({ day }) => {
  const {
    date,
    day: {
      maxtemp_c,
      mintemp_c,
      condition: { text },
    },
  } = day;


  const iconId = weatherIconMap[text.toLowerCase()] || "default";



  return (
    <div className={styles.card}>
      <p className={styles.dayName}>{getDayOfWeek(date)}</p>
      <p className={styles.dayInfo}>{formatDate(date)}</p>
      <div className={styles.icon}>
        <GlobalSvgSelector id={iconId} />
      </div>
      <span className={styles.tempDay}>{Math.floor(maxtemp_c)}°</span>
      <span className={styles.tempNight}>{Math.floor(mintemp_c)}°</span>
      <span className={styles.info}>{text}</span>
    </div>
  );
};

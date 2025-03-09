import { FC } from "react";
import styles from "./Days.module.scss";
import { weatherIconMap, getDayOfWeek, formatDate } from "../../../../utils/utils";
import { GlobalSvgSelector } from "../../../../assets/images/icons/GlobalSvgSelector";


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
  onClick: () => void;
}

export const Card: FC<CardProps> = ({ day, onClick }) => {
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
    <div className={styles.card} onClick={onClick}>
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

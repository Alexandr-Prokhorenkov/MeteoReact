import { FC } from "react";
import styles from "./Days.module.scss";
import { IDay } from "./Days";
import { GlobalSvgSelector } from "../../../../assets/images/icons/GlobalSvgSelector";

interface CardProps {
  day: IDay;
}

export const Card: FC<CardProps> = ({day}) => {
  const { dayName, day_info, icon_id, temp_day, temp_night, info } = day;
  return (
<div className={styles.card}>
  <p className={styles.dayName}>{dayName}</p>
  <p className={styles.dayInfo}>{day_info}</p>
  <div className={styles.icon}>
  <GlobalSvgSelector id={icon_id} />
  </div>
  <span className={styles.tempDay}>{temp_day}</span>
  <span className={styles.tempNight}>{temp_night}</span>
  <span className={styles.info}>{info}</span>
</div>
  ) 
};

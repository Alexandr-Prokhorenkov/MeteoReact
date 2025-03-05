import React from "react";
import styles from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/images/icons/GlobalSvgSelector";

export const ThisDay: React.FC = () => {
  return (
    <div className={styles.thisDay}>
      <div className={styles.topBlock}>
        <div className={styles.weatherText}>
          <div className={styles.thisDayTemp}>20°</div>
          <div className={styles.thisDayText}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun-icon" />
      </div>
      <div className={styles.bottomBlock}>
        <p className={styles.thisDayDescription}>Время: 21:54</p>
        <p className={styles.thisDayDescription}>Город: Санкт-Петербург</p>
      </div>
    </div>
  );
};

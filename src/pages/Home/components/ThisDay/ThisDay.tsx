import { FC } from "react";
import styles from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/images/icons/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}

export const ThisDay: FC<Props> = ({ weather }: Props) => {
  if (!weather || !weather.main) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.thisDay}>
      <div className={styles.topBlock}>
        <div className={styles.weatherText}>
          <div className={styles.thisDayTemp}>{weather.main.temp}</div>
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

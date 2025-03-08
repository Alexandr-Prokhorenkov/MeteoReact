import { useEffect, useState } from "react";
import styles from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/images/icons/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import { useCustomSelector } from "../../../../hooks/store";
import { getCloudinessDescription, getCurrentTime } from "../../../../utils/time";
import { cityMapping } from "../constants";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const selectedCity = useCustomSelector(
    (state) => state.currentWeatherSliceReducer.city
  );
  const [currentTime, setCurrentTime] = useState(getCurrentTime(selectedCity));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime(selectedCity));
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedCity]);

  if (!weather || !weather.main) {
    return <div>Загрузка погоды...</div>;
  }

  const russianCity = cityMapping[selectedCity] || selectedCity;

  return (
    <div className={styles.thisDay}>
      <div className={styles.topBlock}>
        <div className={styles.weatherText}>
          <div className={styles.thisDayTemp}>
            {Math.floor(weather.main.temp)}°
          </div>
          <div className={styles.thisDayText}>Сегодня</div>
        </div>
        <div className={styles.weatherIcon}>
        <GlobalSvgSelector id={getCloudinessDescription(weather.clouds.all)} />
        </div>
      </div>
      <div className={styles.bottomBlock}>
        <p className={styles.thisDayDescription}>Время: {currentTime}</p>
        <p className={styles.thisDayDescription}>Город: {russianCity}</p>
      </div>
    </div>
  );
};

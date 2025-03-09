import { useEffect, useState } from "react";
import { GlobalSvgSelector } from "../../assets/images/icons/GlobalSvgSelector";
import { useCustomSelector } from "../../hooks/store";
import { cityMapping } from "../../pages/Home/components/constants";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem/ThisDayItem";
import { ForecastDay } from "../../store/types/types";
import styles from "./Popup.module.scss";
import { convertInHgToMmHg, getCurrentTime, getDayOfWeek, getPressureDescription, weatherIconMap } from "../../utils/utils";

interface PopUpProps {
  dayData: ForecastDay;
  onClose: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({ dayData, onClose }) => {
  console.log(dayData);

  const selectedCity = useCustomSelector(
    (state) => state.currentWeatherSliceReducer.city
  );

  const russianCity = cityMapping[selectedCity] || selectedCity;

    const [currentTime, setCurrentTime] = useState(getCurrentTime(selectedCity));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(getCurrentTime(selectedCity));
      }, 60000);
  
      return () => clearInterval(interval);
    }, [selectedCity]);


  const iconId = weatherIconMap[dayData.day.condition.text.toLowerCase()] || "default";
  

  const items = [
    {
      icon_id: "temp-icon",
      name: "Температура",
      value: `${Math.floor(dayData.day.maxtemp_c)}° - ощущается как ${
        Math.floor(dayData.day.maxtemp_c) - 3
      }°`,
    },
    {
      icon_id: "pressure-icon",
      name: "Давление",
      value: `${convertInHgToMmHg(dayData.hour[0].pressure_in)} мм ртутного столба - ${getPressureDescription(convertInHgToMmHg(dayData.hour[0].pressure_in))}`,
    },
    {
      icon_id: "precipitation-icon",
      name: "Осадки",
      value: `${dayData.day.condition.text}`,
    },
    {
      icon_id: "wind-icon",
      name: "Ветер",
      value: `${Math.floor(dayData.day.maxwind_kph)} м/с`,
    },
  ];
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.dayInfo}>
          <div className={styles.dayTemp}>
            {Math.floor(dayData.day.maxtemp_c)}°
          </div>
          <div className={styles.day_of_the_week}>
            {getDayOfWeek(dayData.date, "long")}
          </div>
          <div className={styles.image}>
            {" "}
            <GlobalSvgSelector id={iconId} />
          </div>
          <div className={styles.thisDayDescription}>Время: {currentTime}</div>
          <div className={styles.thisDayDescription}>Город: {russianCity}</div>
        </div>
        <div className={styles.popupInfo}>
          {items.map((item) => (
            <ThisDayItem
              icon_id={item.icon_id}
              name={item.name}
              value={item.value}
            />
          ))}
        </div>
        <div className={styles.close} onClick={onClose}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

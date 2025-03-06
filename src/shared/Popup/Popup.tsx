import { GlobalSvgSelector } from "../../assets/images/icons/GlobalSvgSelector";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem/ThisDayItem";
import styles from "./Popup.module.scss";


export const PopUp = () => {
  const items = [
    {
      icon_id: "temp-icon",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure-icon",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation-icon",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind-icon",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
    <div className={styles.blur}></div>
    <div className={styles.popup}>
      <div className={styles.dayInfo}>
        <div className={styles.dayTemp}>20°</div>
        <div className={styles.day_of_the_week}>Среда</div>
        <div className={styles.image}> <GlobalSvgSelector id="small_rain_sun" /></div>
        <div className={styles.thisDayDescription}>Время: 21:54</div>
        <div className={styles.thisDayDescription}>Город: Санкт-Петербург</div>
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
      <div className={styles.close}>
         <GlobalSvgSelector id="close" />
      </div>
    </div>
    </>
  );
};

import { FC } from "react";
import styles from './ThisDayItem.module.scss'
import { GlobalSvgSelector } from "../../../../../assets/images/icons/GlobalSvgSelector";

interface ThisDayItemProps {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayItem:FC<ThisDayItemProps> = ({icon_id, name, value}) => {
  return (
    <div key={icon_id} className={styles.wrapperBlock}>
      <GlobalSvgSelector id={icon_id} />
      <p className={styles.textBlock}>{name}</p>
      <p className={styles.textBlockDescription}>{value}</p>
    </div>
  );
};

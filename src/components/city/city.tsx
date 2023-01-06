import React, {FC, useState} from "react";
import styles from "./city.module.scss";

type Props = {
  city: string;
  isDisabled: boolean;
  selected: string[];
  setSelected: (items: string[]) => void;
};

const City: FC<Props> = ({ city, isDisabled, selected, setSelected }) => {
    const [active, setActive] = useState(false);

    console.log(active);


    const handleClick = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
        setActive(!active);
  };

  return (
    <button
      disabled={isDisabled}
      onClick={() => handleClick(city)}
      className={`${styles.cityBtn} ${active ? styles.active : ''}`}
    >
      {city}
    </button>
  );
};

export default City;

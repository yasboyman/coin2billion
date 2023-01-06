import React, { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { cities } from "./data/cities";
import City from "./components/city/city";

// @ts-ignore
import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const App: FC = () => {
  const [triggered, setTriggered] = useState<boolean>(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [citiesDisabled, setCitiesDisabled] = useState<boolean>(false);

  useEffect(() => {
  if(selectedCities.length > 2){
      setCitiesDisabled(false)
  }
  }, [selectedCities]);

  console.log('selected cities', selectedCities)

  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <h2>Enter start and end destination and we will let you know dwag</h2>
      </header>
      <section className={styles.cityContainer}>
        {cities.map((city) => {
          return <City city={city.name} isDisabled={citiesDisabled} setSelected={setSelectedCities} selected={ selectedCities} />;
        })}
      </section>
        <div>

        </div>
      <button onClick={() => setTriggered(true)}>Go</button>
    </div>
  );
};

export default App;

import React, { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import Input from "./components/Input/Input";

// @ts-ignore
import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const App: FC = () => {
  const [firstCoordinates, setFirstCoordinates] = useState<string | "">("");
  const [secondCoordinates, setSecondCoordinates] = useState<string | "">("");
  const [firstInputAddress, setFirstInputAddress] = useState<string | "">("");
  const [secondInputAddress, setSecondInputAddress] = useState<string | "">("");
  const [firstValue, setFirstValue] = useState<string | "">("");
  const [secondValue, setSecondValue] = useState<string | "">("");
  const [triggered, setTriggered] = useState<boolean>(false);

  // Get latitude & longitude from address.
  const getFirstLongLat = (address: string, callback: any) =>
    Geocode.fromAddress(address).then(
      (response: {
        results: { geometry: { location: { lat: any; lng: any } } }[];
      }) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("this is the response", response);
        console.log("FUNCTION CALLED");
        callback({
          latitude: lat,
          longitude: lng,
        });
      },
      (error: any) => {
        // Add react error here later //
        console.log(error);
      }
    );

  useEffect(() => {
    const grabBoth = async () => {
      try {
        await getFirstLongLat(firstValue.toLowerCase(), setFirstCoordinates);
        await getFirstLongLat(secondValue.toLowerCase(), setSecondCoordinates);
      } catch (error) {
        return error;
      }
    };
    grabBoth();
  }, [triggered]);

  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        {/*<h1> How many £1 coins to reach a £billion..... </h1>*/}
        <h2> Enter start and end destination and we will let you know dwag </h2>
      </header>
      <section className={styles.inputContainer}>
        <Input
          name="firstInput"
          label="firstInput"
          type="text"
          onChange={(e) => setFirstValue(e.target.value)}
          placeholder="Enter location"
          ariaLabel="first input"
          value={firstValue}
        />
        <Input
          name="secondInput"
          label="secondInput"
          type="text"
          onChange={(e) => setSecondValue(e.target.value)}
          aria-label={"second input"}
          placeholder="Enter location"
          // onKeyDown
          ariaLabel="first location input"
          value={secondValue}
        />
      </section>
      <button onClick={() => setTriggered(true)}>Go</button>
    </div>
  );
};

export default App;

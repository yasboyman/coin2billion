import React, {FC, useEffect, useState} from "react";
import  styles from "./App.module.scss";
import Input from './components/Input/Input'

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
  const getFirstLongLat = (address: string, callback: any) =>  Geocode.fromAddress(address).then(
    (response: { results: { geometry: { location: { lat: any; lng: any; }; }; }[]; }) => {
       const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        console.log('FUNCTION CALLED');
      callback(lat,lng)
    },
    (error: any) => {
        // Add react error here later //
      console.error(error);
    }
  );

  console.log('firstCoordinates',firstCoordinates)
  console.log('secondCoordinates',secondCoordinates)

  useEffect(() => {

      const grabBoth = async () => {
          try {
              const firstResponse = await getFirstLongLat(firstValue.toLowerCase(), setFirstCoordinates)
              const secondResponse = await getFirstLongLat(secondValue.toLowerCase(), secondCoordinates)

              console.log(`values`, [firstResponse, secondResponse]);
          } catch (error) {
              return error;
          }
      }
      grabBoth();

  }, [triggered]);




  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <h1> How many £1 coins to reach a £billion..... </h1>
        <h2> Enter start and end destination and we will let you know dwag </h2>
      </header>
        <section className={styles.inputContainer}>
            <Input
                name='firstInput'
                label='firstInput'
                type='text'
                onChange={(e) => setFirstValue(e.target.value)}
                placeholder='Enter location'
                // onKeyDown
                ariaLabel='location input'
                value={firstValue}
            />
            <Input
                name='firstInput'
                label='firstInput'
                type='text'
                onChange={(e) => setSecondValue(e.target.value)}
                placeholder='Enter location'
                // onKeyDown
                ariaLabel='location input'
                value={secondValue}
            />


        </section>
        <button onClick={ () =>setTriggered(true)}>
            Go
        </button>

    </div>
  );
};

export default App

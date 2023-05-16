import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import FilteredCardList from "../components/SearchBar";
import "./Home.css";


const Home: React.FC = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://18.215.146.215/events/`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
        console.log(error.message);
    });
  }, []);
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>Events Listing Page</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            {data && <FilteredCardList myArrayOfCards={data}></FilteredCardList>}
          </IonContent>
      </IonPage>
  );
};

export default Home;

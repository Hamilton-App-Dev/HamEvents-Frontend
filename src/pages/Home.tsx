import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonSpinner,
    IonIcon,
} from "@ionic/react";

import { personCircle } from "ionicons/icons";

import React, { useEffect, useState } from "react";
import FilteredCardList from "../components/SearchBar";
import "./Home.css";

const Home: React.FC = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(`https://events-backend-hquq.onrender.com/events`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
            })
            .catch((error) => {
                setError(error.message);
                setData(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Your Updates</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton id="click-trigger">
                            <IonIcon
                                slot="icon-only"
                                color="medium"
                                icon={personCircle}
                            ></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {loading && (
                    <div className="flex-center">
                        <IonSpinner
                            name="crescent"
                            color="secondary"
                        ></IonSpinner>
                    </div>
                )}
                {error && (
                    <div>{`There is a problem fetching the events data - ${error}`}</div>
                )}
                {data && (
                    <FilteredCardList
                        fetchData={fetchData}
                        myArrayOfCards={data}
                    ></FilteredCardList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Home;

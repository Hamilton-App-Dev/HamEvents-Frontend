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
import "./Home.css";
import HomeLayout from "../components/HomeLayout";

const Home: React.FC = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = process.env.REACT_APP_API_URL ?? "";
    console.log(url);
    const fetchData = () => {
        fetch(url)
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
                    <div>
                        There is a problem fetching the events data - {error}
                    </div>
                )}
                {data && (
                    <HomeLayout
                        fetchData={fetchData}
                        myArrayOfCards={data}
                    ></HomeLayout>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Home;

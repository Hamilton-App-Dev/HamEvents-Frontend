import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
//import ExploreContainer from "../components/ExploreContainer";
import MyComponent from "../components/EventCard";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">HELLOWRDK</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <MyComponent/>
            </IonContent>
        </IonPage>
    );
};

export default Home;

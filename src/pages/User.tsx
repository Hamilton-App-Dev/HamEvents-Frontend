import React from "react";
import {
    IonContent,
    IonPage,
    IonAvatar,
    IonLabel,
    IonItem,
    IonIcon,
} from "@ionic/react";
import { useAuth0 } from "@auth0/auth0-react";
import "./User.css";
import { useParams } from "react-router-dom";

const UserProfile: React.FC = () => {
    const { user } = useAuth0();
    const { username } = useParams<{ username: string }>();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="profile-container">
                    <IonAvatar>
                        <img src={user.picture} alt={user.name} />
                    </IonAvatar>
                    <IonLabel className="profile-name">{user.name}</IonLabel>
                    <IonItem lines="none">
                        <IonIcon name="mail-outline" slot="start"></IonIcon>
                        <IonLabel>{user.email}</IonLabel>
                    </IonItem>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default UserProfile;

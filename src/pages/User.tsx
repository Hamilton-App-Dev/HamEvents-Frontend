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
import { mail } from "ionicons/icons";
import { useParams } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

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
                        <IonIcon icon={mail} slot="start"></IonIcon>
                        <IonLabel>{user.email}</IonLabel>
                    </IonItem>

                    <LogoutButton> Log out</LogoutButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default UserProfile;

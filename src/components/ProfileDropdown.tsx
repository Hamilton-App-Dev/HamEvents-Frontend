// src/components/ProfileDropdown.tsx
import React, { useState } from "react";
import {
    IonButton,
    IonPopover,
    IonList,
    IonItem,
    IonLabel,
} from "@ionic/react";
import { IonAvatar, IonChip } from "@ionic/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";

const ProfileDropdown: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);

    const togglePopover = (event: React.MouseEvent) => {
        event.persist();
        setShowPopover((prevShowPopover) => !prevShowPopover);
    };
    const { loginWithRedirect } = useAuth0();

    const login = async () => {
        await loginWithRedirect({
            async openUrl(url) {
                // Redirect using Capacitor's Browser plugin
                await Browser.open({
                    url,
                    windowName: "_self",
                });
            },
        });
    };

    return (
        <>
            <div className="profile-button-container">
                <IonChip onClick={togglePopover}>
                    <IonAvatar>
                        <img
                            alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        />
                    </IonAvatar>
                    <IonLabel>Profile</IonLabel>
                </IonChip>
            </div>
            {/* <IonButton onClick={togglePopover}>Profile</IonButton> */}
            <IonPopover
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
            >
                <IonList>
                    <IonItem button onClick={login}>
                        <IonLabel>Edit Profile</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => console.log("Logout")}>
                        <IonLabel>Logout</IonLabel>
                    </IonItem>
                </IonList>
            </IonPopover>
        </>
    );
};

export default ProfileDropdown;

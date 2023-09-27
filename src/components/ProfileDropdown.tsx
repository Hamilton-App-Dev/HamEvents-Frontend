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
import { useAuth0WithCapacitor } from "../hooks/useAuth0WithCapacitor";

const ProfileDropdown: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);

    const togglePopover = (event: React.MouseEvent) => {
        event.persist();
        setShowPopover((prevShowPopover) => !prevShowPopover);
    };

    const { isAuthenticated, doLogout, doLogin } = useAuth0WithCapacitor();

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
                    {isAuthenticated ? (
                        <IonItem
                            button
                            onClick={() => {
                                doLogout();
                                setShowPopover(false);
                            }}
                        >
                            <IonLabel>Logout</IonLabel>
                        </IonItem>
                    ) : (
                        <IonItem
                            button
                            onClick={() => {
                                doLogin();
                                setShowPopover(false);
                            }}
                        >
                            <IonLabel>Login</IonLabel>
                        </IonItem>
                    )}
                </IonList>
            </IonPopover>
        </>
    );
};

export default ProfileDropdown;

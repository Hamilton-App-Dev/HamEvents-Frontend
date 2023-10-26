// src/components/ProfileDropdown.tsx
import React from "react";
import { IonPopover, IonList, IonItem, IonLabel } from "@ionic/react";
import { useAuth0WithCapacitor } from "../hooks/useAuth0WithCapacitor";

const ProfileDropdown: React.FC = () => {
    const { isAuthenticated, doLogout, doLogin } = useAuth0WithCapacitor();

    const style = { cursor: "pointer" };
    return (
        <IonPopover trigger="click-trigger" triggerAction="click">
            <IonList>
                {isAuthenticated ? (
                    <IonItem style={style} onClick={doLogout}>
                        <IonLabel>Logout</IonLabel>
                    </IonItem>
                ) : (
                    <IonItem style={style} onClick={doLogin}>
                        <IonLabel>Login</IonLabel>
                    </IonItem>
                )}
            </IonList>
        </IonPopover>
    );
};

export default ProfileDropdown;

import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";
import { IonButton } from "@ionic/react";

// This should reflect the URL added earlier to your "Allowed Logout URLs" setting
// in the Auth0 dashboard.
// "YOUR_PACKAGE_ID://{yourDomain}/capacitor/YOUR_PACKAGE_ID/callback";

interface LogoutButtonProps {
    children?: string;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
    const { logout } = useAuth0();
    const logoutUrl = window.location.origin;
    const doLogout = async () => {
        logout({ logoutParams: { returnTo: logoutUrl } });
    };

    return (
        <IonButton
            className="button-style"
            shape="round"
            fill="solid"
            expand="block"
            onClick={doLogout}
        >
            {children}
        </IonButton>
    );
};

export default LogoutButton;

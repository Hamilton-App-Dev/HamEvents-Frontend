import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";
import { IonButton } from "@ionic/react";

// This should reflect the URL added earlier to your "Allowed Logout URLs" setting
// in the Auth0 dashboard.
// "YOUR_PACKAGE_ID://{yourDomain}/capacitor/YOUR_PACKAGE_ID/callback";

const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();
    const logoutUrl = window.location.origin;
    const doLogout = async () => {
        await logout({
            logoutParams: {
                returnTo: logoutUrl,
            },
            async openUrl(url: any) {
                // Redirect using Capacitor's Browser plugin
                await Browser.open({
                    url: logoutUrl,
                    windowName: "_self",
                });
            },
        });
    };

    return <IonButton onClick={doLogout}>Log out</IonButton>;
};

export default LogoutButton;

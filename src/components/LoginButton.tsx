import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";
import { IonButton } from "@ionic/react";
import "./LoginButton.css";

const LoginButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();
    const currentUrl = window.location.href;

    const login = async () => {
        await loginWithRedirect({
            async openUrl(url) {
                console.log(url);
                // Redirect using Capacitor's Browser plugin
                await Browser.open({
                    url: `${currentUrl}home`,
                    windowName: "_self",
                });
            },
        });
    };

    return (
        <IonButton
            className="button-style"
            shape="round"
            fill="outline"
            expand="block"
            onClick={login}
        >
            Log in
        </IonButton>
    );
};

export default LoginButton;

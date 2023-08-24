import { useAuth0 } from "@auth0/auth0-react";
import { IonButton } from "@ionic/react";
import "./LoginButton.css";
import detectDarkMode from "../utils/detectDarkMode";
// import { useEffect, ReactNode } from "react";
// import { Browser } from "@capacitor/browser";
// import { useHistory } from "react-router-dom";

interface LoginButtonProps {
    children?: string;
}

const LoginButton = ({ children }: LoginButtonProps) => {
    const { loginWithRedirect } = useAuth0();
    // const history = useHistory(); // Get the history object

    const doLogin = async () => {
        await loginWithRedirect();
    };

    const darkmode = detectDarkMode()
    let styleString = "button-style";
   
    if (!darkmode) {
        styleString += " light"
        console.log(styleString)
    }

    // useEffect(() => {
    //     const handleAuth = () => {
    //         if (window.location.search.includes("code=")) {
    //             history.push("/");
    //         }
    //     };

    //     handleAuth();
    // }, [history]);

    return (
        <IonButton
            className={styleString}
            shape="round"
            fill="outline"
            expand="block"
            onClick={doLogin}
        >
            {children}
        </IonButton>
    );
};

export default LoginButton;

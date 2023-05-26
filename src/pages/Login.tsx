import { IonPage, IonContent, IonImg } from "@ionic/react";
import LoginButton from "../components/LoginButton";
import "./Login.css";

const Login = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="login-wrapper">
                    <h1 className="title">Events</h1>
                    <p>
                        Never worry about missing an exciting club event again.
                        Log in or create an account to access Events.
                    </p>
                    <div>
                        <LoginButton>Log In</LoginButton>
                        <p className="help-button">Need Help?</p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;

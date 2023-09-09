import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    IonApp,
    IonTabs,
    IonRouterOutlet,
    setupIonicReact,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from "@ionic/react";

import { useAuth0 } from "@auth0/auth0-react";

import { home, person } from "ionicons/icons";

import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import User from "./pages/User";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
    const { isLoading } = useAuth0();

    //Had to nest Switch inside IonouterOutlet to fix the issue of the details page not being immediately
    //rendered after clicking the button
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <IonApp>
            <IonReactRouter>
                <Switch>
                    <Route path="/">
                        <IonRouterOutlet>
                            <Route exact path="/home">
                                <Home />
                            </Route>
                            <Route exact path="/profile">
                                <User />
                            </Route>
                            <Redirect exact from="/" to="/home" />
                        </IonRouterOutlet>
                    </Route>
                </Switch>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;

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
import Login from "./pages/Login";
import SubPage from "./components/SubPage";

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
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user);
    console.log("authenticated", isAuthenticated);

    //Had to nest Switch inside IonouterOutlet to fix the issue of the details page not being immediately
    //rendered after clicking the button
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <IonApp>
            <IonReactRouter>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        {/* {( */}
                        <IonTabs>
                            <IonRouterOutlet>
                                <Route exact path="/home">
                                    <Home />
                                </Route>
                                <Route exact path="/profile">
                                    <User />
                                </Route>
                                <Route
                                    exact
                                    path="/details/:id"
                                    component={SubPage}
                                />
                                <Redirect exact from="/" to="/home" />
                            </IonRouterOutlet>

                            <IonTabBar slot="bottom">
                                <IonTabButton tab="home" href="/home">
                                    <IonIcon icon={home} />
                                    <IonLabel>Home</IonLabel>
                                </IonTabButton>

                                <IonTabButton tab="profiles" href="/profile">
                                    <IonIcon icon={person} />
                                    <IonLabel>Profile</IonLabel>
                                </IonTabButton>
                            </IonTabBar>
                        </IonTabs>
                    </Route>
                </Switch>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;

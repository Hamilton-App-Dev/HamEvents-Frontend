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
	IonSpinner,
} from "@ionic/react";

import { useAuth0 } from "@auth0/auth0-react";
import { App as CapApp } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { useEffect } from "react";

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
import "./theme/tailwind.css";
import "./App.css";

setupIonicReact();

const App: React.FC = () => {
	//Had to nest Switch inside IonouterOutlet to fix the issue of the details page not being immediately
	//rendered after clicking the button
	return (
		<IonApp>
			<IonReactRouter>
				<Switch>
					<Route path="/">
						<IonRouterOutlet>
							<Route exact path="/home">
								<Home />
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

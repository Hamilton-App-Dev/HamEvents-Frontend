import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
//import SubPage from './components/SubPage';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';

setupIonicReact();
console.log(process.env.REACT_APP_MapBox_API_KEY);
const App: React.FC = () => (
  //Had to nest Switch inside IonouterOutlet to fix the issue of the details page not being immediately 
  //rendered after clicking the button
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route exact path="/">
            <Redirect to="/home" /> */}
          {/* </Route>
          <Route exact path="/details/:id" component={SubPage}/> */}
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

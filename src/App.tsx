import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page/Page';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Notices from './pages/Notices/Notices';
import Profile from './pages/Profile/Profile';
import Accesses from './pages/Accesses/Accesses';
import Directory from './pages/Directory/Directory';
import Emergencies from './pages/Emergencies/Emergencies';
import Events from './pages/Events/Events';
import Payments from './pages/Payments/Payments';
import Votes from './pages/Votes/Votes';
import Statements from './pages/Statements/Statements';
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

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/login" component={Login} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/notices" component={Notices} exact />
            <Route path="/accesses" component={Accesses} exact />
            <Route path="/directory" component={Directory} exact />
            <Route path="/emergencies" component={Emergencies} exact />
            <Route path="/events" component={Events} exact />
            <Route path="/payments" component={Payments} exact />
            <Route path="/votes" component={Votes} exact />
            <Route path="/statements" component={Statements} exact />
            <Route path="/" exact={true}>
              <Redirect to="/login" />
            </Route>
            <Route path="/folder/:name" component={Page} exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

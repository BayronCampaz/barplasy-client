import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/users/auth/Login'
import Register from './components/users/auth/Register'
import LoginCenter from './components/centers/auth/LoginCenter'
import RegisterCenter from './components/centers/auth/RegisterCenter'
import HomeCenter from './components/centers/dashboard/HomeCenter';
import Centers from './components/users/centers/Centers'
import Reservations from './components/users/centers/Reservations'
import CenterState from './context/centers/centerState'
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
import ServiceState from './context/services/serviceState'
import PrivateRoute from './components/routes/PrivateRoute'
import EditSite from './components/centers/edition/EditSite';
import AddService from './components/centers/edition/AddService';
import UpdateService from './components/centers/edition/UpdateService';
import ReservationState from './context/reservations/reservationState';


function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (

    <CenterState>
      <AlertState>
        <AuthState>
          <ServiceState>
            <ReservationState>
            <Router>
              <Switch>
                {/* Users */}
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/centers" component={Centers} />
                <PrivateRoute exact path="/reservations" component={Reservations} />
                <PrivateRoute exact path="/centers/:centerId" component={Centers}/>
                <PrivateRoute exact path="/centers/:centerId/:serviceId" component={Centers}/>

                {/* Centers */}
                <Route exact path="/register-center" component={RegisterCenter} />
                <Route exact path="/login-center" component={LoginCenter}/>
                <PrivateRoute exact path="/home-center" component={HomeCenter} />
                <PrivateRoute exact path="/edit-site" component={EditSite} />
                <PrivateRoute exact path="/add-service" component={AddService} />
                <PrivateRoute exact path="/update-service" component={UpdateService} />

                {/*Not Found*/}
                <Route exact path="" component={Login} />
                
              </Switch>
            </Router>
            </ReservationState>
          </ServiceState>
      </AuthState>
      </AlertState>
    </CenterState>
  );
}

export default App;

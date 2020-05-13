import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/users/auth/Login'
import Register from './components/users/auth/Register'
import LoginCenter from './components/centers/auth/LoginCenter'
import RegisterCenter from './components/centers/auth/RegisterCenter'
import HomeCenter from './components/centers/dashboard/HomeCenter';
import Centers from './components/users/centers/Centers'
import Books from './components/users/centers/Books'
import Center from './components/users/centers/Center'
import CenterState from './context/centers/centerState'
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/token';
import PrivateRoute from './components/routes/PrivateRoute'



const token = localStorage.getItem('token');

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (

    <CenterState>
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/register-center" component={RegisterCenter} />
              <Route exact path="/login-center" component={LoginCenter}/>
              <PrivateRoute exact path="/home-center" component={HomeCenter} />
              <PrivateRoute exact path="/centers" component={Centers} />
              <PrivateRoute exact path="/myBooks" component={Books} />
              <PrivateRoute path="/center/:id" component={Center}/>

            </Switch>
          </Router>
      </AuthState>
      </AlertState>
    </CenterState>
  );
}

export default App;

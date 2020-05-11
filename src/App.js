import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Centers from './components/centers/Centers'
import Books from './components/centers/Books'
import Center from './components/centers/Center'
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

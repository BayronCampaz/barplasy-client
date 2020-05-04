import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Centers from './components/centers/Centers'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/centers" component={Centers} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "../components/Login";
import Registration from "../components/Registration";
import Cities from "../components/Cities";
import PrevCities from "../components/PrevCities";

//import { Wrapper } from './styles';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/login">Login</Link>
            </li>
          <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/cities">Cities</Link>
            </li>
            <li>
              <Link to="/prevcities">PrevCities</Link>
            </li>
           
          </ul>
        </nav>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cities">
          <Cities/>
        </Route>
        <Route path="/prevcities">
          <PrevCities />
        </Route>
      </Switch>
    </div>
    </Router>
);
}

export default App;

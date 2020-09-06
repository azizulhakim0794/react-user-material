import React from 'react';
import './App.css';
import RandomUser from './components/RandomUser/RandomUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetails from './components/UserDetails/UserDetails';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
  return (
        <Router>
        <Switch>
          <Route  path="/randomuser">
            <RandomUser/>
            </Route>
            <Route exact path="/">
            <RandomUser/>
            </Route>
            <Route path="/about/:userId">
            <UserDetails/>
            </Route>
            <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
        </Router>
 
  );
}

export default App;

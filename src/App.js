import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserDetails from './components/UserDetails/UserDetails';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
  return (
        <Router>
        <Switch>
          <Route  path="/home">
            <HomePage/>
            </Route>
            <Route exact path="/">
            <HomePage/>
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

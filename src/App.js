import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import NoMatch from './Components/Nomatch/NoMatch';
import Background from './images/Bg.png';
import VehicleDetails from './Components/VehicleDetails/VehicleDetails';
library.add(fab)
export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div classname="router-container" style={{ 
      backgroundColor: "lightcyan",
      background:"cover", 
      height: "1000px"
    }}>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/blog">
          <Home/>
          </Route>
          <PrivateRoute path="/destination">
              <Destination/>
            </PrivateRoute>
          <PrivateRoute path="/destinationKey/:id">
              <VehicleDetails/>
            </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
    </div>
  )
}

export default App;
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import landingPage from "./pages/landingPage";

class App extends Component{
  render() {
    return(
      <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path ="/" component={landingPage}/>
          <Route component={landingPage}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;

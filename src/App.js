import React from "react";
import {Route, Switch} from 'react-router-dom'

import Rules from "./components/Rules";

import "./App.css";


class App extends React.Component {

  render() {

    return( 
      
      <div className="App">
        
        <Rules />
        <Switch>
          <Route exact path='/' /*{Landing}*//>
        </Switch>
      </div>
      
  )}
}

export default App;

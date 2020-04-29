import React from "react";
import {Route, Switch} from 'react-router-dom'

import Story from "./components/Story";

import "./App.css";


class App extends React.Component {

  render() {

    return( 
      
      <div className="App">
        
        <Story />
        <Switch>
          <Route exact path='/' /*{Landing}*//>
        </Switch>
      </div>
      
  )}
}

export default App;

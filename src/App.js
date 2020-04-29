import React from "react";
import LifeBar from "./components/LifeBar";
import "./App.css";
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render() {

    return( 
      <div className="App">
        <Switch>
          <Route exact path='/' /*{Landing}*//>
        </Switch>
      </div>      
  )}
}

export default App;

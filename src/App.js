import React from "react";
import {Route, Switch} from 'react-router-dom'

import "./App.css";

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

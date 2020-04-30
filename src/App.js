import React from "react";
import {Route, Switch} from 'react-router-dom'

import Game from './components/Game'
import Landing from './components/Landing'
import Rules from './components/Rules'
import Story from './components/Story'
import Call from './components/Call'
import "./App.css";

class App extends React.Component {

  render() {
    
    return( 
      <div className="App">
      
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/story' component={Story}/>
          <Route path='/rules' component={Rules}/>
          <Route path='/level-1' component={Game}/>
        </Switch>
      </div>      
  )}
}


export default App;

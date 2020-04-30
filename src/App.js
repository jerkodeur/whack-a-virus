import React from 'react';
import './App.css';
import Accueil from './components/Accueil'
import {Route,Switch} from 'react-router-dom'
import Endgame from './components/Endgame'

function App() {
  return (
    <div className="App">
      <Endgame />
      <Switch>
        {/* <Route exact path="/">
          <Accueil />  
        </Route> */}
        
      </Switch>
    </div>
  );
}

export default App;

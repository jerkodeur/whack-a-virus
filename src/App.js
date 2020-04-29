import React from 'react';
import './App.css';
import Accueil from './components/Accueil'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Accueil />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

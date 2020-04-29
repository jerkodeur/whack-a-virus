import React from 'react';
import './App.css';
import Landing from './components/Landing'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Queue from "./Queue";
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Queue}/>
        <Route path='/admin' component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;

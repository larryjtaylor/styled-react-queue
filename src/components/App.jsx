import React from "react";
import Header from "./Header";
import Queue from "./Queue";
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import styles from '../styles/App.css';

function App(props) {
  return (
    <div className = {styles.app}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Queue}/>
        <Route path='/admin' component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;

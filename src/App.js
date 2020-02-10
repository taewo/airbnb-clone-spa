import React from 'react';
import Test from './components/Test'
import MainForm from './containers/MainForm'
import Test1 from './components/Test1'

import MainContainer from './containers/MainContainer'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer}></Route>
        <Route path="/test" component={MainForm}></Route>
        <Route path="/test1" component={Test1}></Route>
      </Switch>
    </Router>
  );
}

export default App;

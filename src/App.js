import React from 'react';
import Test from './components/Test'

import MainContainer from './containers/MainContainer'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer}></Route>
        <Route path="/test" component={Test}></Route>
      </Switch>
    </Router>
  );
}

export default App;

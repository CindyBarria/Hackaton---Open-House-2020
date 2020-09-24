import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./filters/Category";
import Home from "./Home";
import Preparation from "./Preparation";
import Recipes from "./Recipes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/preparation">
          <Preparation />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

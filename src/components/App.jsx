import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./filters/Category";
import Home from "./Home";
import Preparation from "./Preparation";
import Recipes from "./Recipes";
import "../styles/App.css";
import ProductProvider from "../context/ProductProvider";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category">
          <ProductProvider>
            <Category />
          </ProductProvider>
        </Route>
        <Route path="/recipes">
          <ProductProvider>
            <Recipes />
          </ProductProvider>
        </Route>
        <Route path="/preparation">
          <Preparation />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

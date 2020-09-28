import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./filters/Category";
import Home from "./Home";
import Preparation from "./Preparation";
import Recipes from "./Recipes";
import "../styles/App.css";
import ProductProvider from "../context/ProductProvider";
import MenuHeader from "../assets/Menu.png";
import Footer from "../assets/footer.png";
import SpecificDiet from "../components/filters/SpecificDiet";
import ButtonFindHere from "./ButtonFindHere";

const App = () => {
  return (
    <div>
      <img src={MenuHeader} alt="" />
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
              <ButtonFindHere />
              <Recipes />
            </ProductProvider>
          </Route>
          <Route path="/diet">
            <ProductProvider>
              <SpecificDiet />
              <Recipes />
            </ProductProvider>
          </Route>
          <Route path="/preparation">
            <ProductProvider>
              <Preparation />
            </ProductProvider>
          </Route>
        </Switch>
      </Router>
      <img src={Footer} alt="" style={{ marginBottom: "-4px" }} />
    </div>
  );
};

export default App;

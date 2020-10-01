import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import BannerHeader from "./BannerHeader";
import BannerHeader2 from "./BannerHeader2";
import RecipesCategoryTitle from "./RecipesCategoryTitle";
import ScrollToTop from "./ScrollToTop";
import DifficultyLevel from "./filters/DifficultyLevel";
import RecipesForYou from "./RecipesForYou";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Router>
        <Link to="/">
          <img src={MenuHeader} alt=""  className="menu-unimarc"/>
        </Link>
        <ScrollToTop />
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
              <BannerHeader />
              <RecipesCategoryTitle />
              <Search />
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
          <Route path="/difficulty">
            <ProductProvider>
              <DifficultyLevel />
              <Recipes />
            </ProductProvider>
          </Route>
          <Route path="/recipesforyou">
            <ProductProvider>
              <BannerHeader2 />
              <RecipesCategoryTitle />
              <RecipesForYou />
            </ProductProvider>
          </Route>
          <Route path="/preparation">
            <ProductProvider>
              <Preparation />
            </ProductProvider>
          </Route>
        </Switch>
      </Router>
      <img src={Footer} alt="" style={{ marginBottom: "-4px" }} className="footer-img" />
    </div>
  );
};

export default App;

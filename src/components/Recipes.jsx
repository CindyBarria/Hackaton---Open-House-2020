import React from "react";
import { Link } from "react-router-dom";
import SpecificDiet from "./filters/SpecificDiet";
import "../styles/Recipes.css";
const Recipes = () => {
  return (
    <div>
      <SpecificDiet />
      <h1>Componente de listado de todas las recetas de la categoria</h1>
      <button>
        <Link to="/preparation">nombre de la receta</Link>
      </button>
    </div>
  );
};

export default Recipes;

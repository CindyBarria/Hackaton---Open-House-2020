import React from "react";
/* import { Link } from "react-router-dom"; */
import SpecificDiet from "./filters/SpecificDiet";
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";

const Recipes = () => {
  const { todasRecetas } = React.useContext(ProductContext);

  return (
    <div>
      <SpecificDiet />
      <h1>Listado recetas</h1>

      {todasRecetas.map((product) =>
        product.filtered === true ? (
          <button key={product.id}>
            <div className="productCard" >
              <p className="card-name">{product.name}</p>
            </div>
          </button>
        ) : 
         product.filteredD === true ? (
          <button key={product.id}>
            <div className="productCard" >
              <p className="card-name">{product.name}</p>
            </div>
          </button>

        ) : (
          ""
        )
      )}



    </div>
  );
};

export default Recipes;





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
          <button>
            <div className="productCard" key={product.id}>
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

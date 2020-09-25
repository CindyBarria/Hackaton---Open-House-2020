import React from "react";
/* import { Link } from "react-router-dom"; */
import SpecificDiet from "./filters/SpecificDiet";
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";

const Recipes = () => {
  const { dataAll } = React.useContext(ProductContext);
  return (
    <div>
      <SpecificDiet />
      <h1>Listado recetas</h1>
      {dataAll.map((product) => {
        return (
          <button>
            <div className="productCard" key={product.id}>
              <p className="card-name">{product.name}</p>
            </div>
          </button>
        );
      })}

      {/*   <button>
        <Link to="/preparation">nombre de la receta</Link>
      </button> */}
    </div>
  );
};

export default Recipes;

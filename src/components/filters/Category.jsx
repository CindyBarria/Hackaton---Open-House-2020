import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";
import { ProductContext } from "../../context/ProductProvider";

const Category = () => {
  const { filterChilena } = React.useContext(ProductContext);

  return (
    <div>
      <h1>Categorias</h1>

      <button onClick={filterChilena}>
        <Link to="/recipes">Cocina Chilena</Link>
      </button>
      <button>
        <Link to="/recipes">vegetariana</Link>
      </button>
    </div>
  );
};

export default Category;

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";

const Category = () => {
  return (
    <div>
      <h1>Categorias</h1>
      <button>
        <Link to="/recipes">Cocina Chilena</Link>
      </button>
    </div>
  );
};

export default Category;

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";
import { ProductContext } from "../../context/ProductProvider";

const Category = () => {
  const { filter, setFilter } = React.useContext(ProductContext);
  console.log(setFilter);
  return (
    <div>
      <h1>Categorias</h1>
      <div>
        <button
          active={filter === "cocinaChilena"}
          onClick={() => setFilter("cocinaChilena")}
        >
          <Link to="/recipes"> Cocina Chilena</Link>
        </button>
        <button
          active={filter === "cocinaParaNiños"}
          onClick={() => setFilter("cocinaParaNiños")}
        >
          <Link to="/recipes"> Cocina para Niños</Link>
        </button>
        <button
          active={filter === "postresYDulces"}
          onClick={() => setFilter("postresYDulces")}
        >
          <Link to="/recipes"> Postres y Dulces</Link>
        </button>
        <button
          active={filter === "acompañamientos"}
          onClick={() => setFilter("acompañamientos")}
        >
          <Link to="/recipes"> Acomapañamientos</Link>
        </button>
        <button
          active={filter === "platosDeFondo"}
          onClick={() => setFilter("platosDeFondo")}
        >
          <Link to="/recipes"> Platos de Fondo</Link>
        </button>
        <button
          active={filter === "sopasYCremas"}
          onClick={() => setFilter("sopasYCremas")}
        >
          <Link to="/recipes"> Sopas y Cremas</Link>
        </button>
      </div>
    </div>
  );
};

export default Category;

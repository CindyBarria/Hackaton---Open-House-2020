import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";
import { ProductContext } from "../../context/ProductProvider";
import CategoriasBannerSuperior from "../../assets/CategoriasBannerSuperior.png";
import Buscador from "../../assets/Buscador.png";
import CategoriasBannerInferior from "../../assets/CategoriasBannerInferior.png";

const Category = () => {
  const { filter, setFilter } = React.useContext(ProductContext);
  console.log(setFilter);
  return (
    <div className="categoryContainer">
      <img src={CategoriasBannerSuperior} alt="" style={{ marginTop: "-4px" }} />
      <h1 className="leadTittle">Ricas recetas</h1>
      <img src={Buscador} alt="" style={{ marginLeft: "25px" }}  />
      <h2 className="categoryTittle">Categorias</h2>
      <div className="categoryButtons">
        <button className = "chileanCuisine"
          active={filter === "cocinaChilena"}
          onClick={() => setFilter("cocinaChilena")}
          

        >
          <Link to="/recipes"> Cocina Chilena</Link>
        </button>
        <button className = "kidsCuisine"
          active={filter === "cocinaParaNiños"}
          onClick={() => setFilter("cocinaParaNiños")}
        >
          <Link to="/recipes"> Cocina para Niños</Link>
        </button>
        <button className = "dessertsSweets"
          active={filter === "postresYDulces"}
          onClick={() => setFilter("postresYDulces")}
        >
          <Link to="/recipes"> Postres y Dulces</Link>
        </button>
        <button className = "sides"
          active={filter === "acompañamientos"}
          onClick={() => setFilter("acompañamientos")}
        >
          <Link to="/recipes"> Acomapañamientos</Link>
        </button>
        <button className = "backgroundDishes"
          active={filter === "platosDeFondo"}
          onClick={() => setFilter("platosDeFondo")}
        >
          <Link to="/recipes"> Platos de Fondo</Link>
        </button>
        <button className = "creamsSoups"
          active={filter === "sopasYCremas"}
          onClick={() => setFilter("sopasYCremas")}
        >
          <Link to="/recipes"> Sopas y Cremas</Link>
        </button>
      </div>
      <footer>
        <img src={CategoriasBannerInferior} alt="" style={{ marginBottom: "-4px" }} />
      </footer>
    </div>
  );
};

export default Category;

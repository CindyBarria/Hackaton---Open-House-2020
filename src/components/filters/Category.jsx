import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";
import { ProductContext } from "../../context/ProductProvider";
import CategoriasBannerSuperior from "../../assets/CategoriasBannerSuperior.png";
import Buscador from "../../assets/Buscador.png";
import CategoriasBannerInferior from "../../assets/CategoriasBannerInferior.png";

const Category = () => {
  const { filter, setFilter } = React.useContext(ProductContext);

  return (
<<<<<<< HEAD
    <div className="categoryContainer">
      <img src={CategoriasBannerSuperior} alt="" style={{ marginTop: "-4px" }} />
      <h1 className="leadTittle">Ricas recetas</h1>
      <img src={Buscador} alt="" style={{ marginLeft: "25px" }}  />
      <h2 className="categoryTittle">Categorias</h2>
      <div className="categoryButtons">
        <button className = "chileanCuisine"
          active={filter === "cocinaChilena"}
=======
    <div>
      <h1>Categorias</h1>
      <div>
        <button
          active={filter ? "cocinaChilena" : undefined}
>>>>>>> 913e6b219933d671e7246fc0a92f7301992111b6
          onClick={() => setFilter("cocinaChilena")}
          

        >
          <Link to="/recipes"> Cocina Chilena</Link>
        </button>
<<<<<<< HEAD
        <button className = "kidsCuisine"
          active={filter === "cocinaParaNiños"}
=======
        <button
          active={filter ? "cocinaParaNiños" : undefined}
>>>>>>> 913e6b219933d671e7246fc0a92f7301992111b6
          onClick={() => setFilter("cocinaParaNiños")}
        >
          <Link to="/recipes"> Cocina para Niños</Link>
        </button>
<<<<<<< HEAD
        <button className = "dessertsSweets"
          active={filter === "postresYDulces"}
=======
        <button
          active={filter ? "postresYDulces" : undefined}
>>>>>>> 913e6b219933d671e7246fc0a92f7301992111b6
          onClick={() => setFilter("postresYDulces")}
        >
          <Link to="/recipes"> Postres y Dulces</Link>
        </button>
<<<<<<< HEAD
        <button className = "sides"
          active={filter === "acompañamientos"}
=======
        <button
          active={filter ? "acompañamientos" : undefined}
>>>>>>> 913e6b219933d671e7246fc0a92f7301992111b6
          onClick={() => setFilter("acompañamientos")}
        >
          <Link to="/recipes"> Acomapañamientos</Link>
        </button>
<<<<<<< HEAD
        <button className = "backgroundDishes"
          active={filter === "platosDeFondo"}
=======
        <button
          active={filter ? "platosDeFondo" : undefined}
>>>>>>> 913e6b219933d671e7246fc0a92f7301992111b6
          onClick={() => setFilter("platosDeFondo")}
        >
          <Link to="/recipes"> Platos de Fondo</Link>
        </button>
<<<<<<< HEAD
        <button className = "creamsSoups"
          active={filter === "sopasYCremas"}
=======
        <button
          active={filter ? "sopasYCremas" : undefined}
>>>>>>> 913e6b219933d671e7246fc0a92f7301992111b6
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

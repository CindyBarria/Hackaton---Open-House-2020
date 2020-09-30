import React from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../styles/Category.css";
import { ProductContext } from "../../context/ProductProvider";
import CategoriasBannerSuperior from "../../assets/CategoriasBannerSuperior.png";
import Buscador from "../../assets/Buscador.png";
import CategoriasBannerInferior from "../../assets/CategoriasBannerInferior.png";

const Category = () => {
  const { filter, setFilter, setFilterDifficulty, setFilterDiet } = React.useContext(ProductContext);

   useEffect(() => {
        return () => {
          setFilterDifficulty("");
          setFilterDiet("");
        };
      }, [setFilterDifficulty, setFilterDiet]); 

  return (
    <div className="categoryContainer">

      <img src={CategoriasBannerSuperior} alt="" style={{ marginTop: "-4px" }} />

      <h1 className="leadTittle">Ricas recetas</h1>

      <img src={Buscador} alt="" style={{ marginLeft: "25px" }}  />

      <h1 className="categoryTittle">Categorias</h1>
  
      <div className="categoryButtons">
        <Link to="/recipes">
            <button className = "chileanCuisine"
              active={filter ? "cocinaChilena" : undefined}
              onClick={() => setFilter("cocinaChilena")}
            >
            <h1 className="clileanCuisineText">Cocina Chilena</h1>
            </button>
        </Link>
        <button className = "kidsCuisine"
          active={filter ? "cocinaParaNiños" : undefined}
          onClick={() => setFilter("cocinaParaNiños")}
        >
          <Link to="/recipes"> Cocina para Niños</Link>
        </button>
        <button className = "dessertsSweets"
          active={filter ? "postresYDulces" : undefined}
          onClick={() => setFilter("postresYDulces")}
        > 
          <Link to="/recipes"> Postres y Dulces</Link>
        </button>
        <button className = "sides"
          active={filter ? "agregados" : undefined}
          onClick={() => setFilter("agregados")}
        >
          <Link to="/recipes"> Agregados</Link>
        </button>
        <button className = "backgroundDishes"
          active={filter ? "platosDeFondo" : undefined}
          onClick={() => setFilter("platosDeFondo")}
        >
          <Link to="/recipes"> Platos de Fondo</Link>
        </button>
        <button className = "creamsSoups"
          active={filter ? "sopasYCremas" : undefined}
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

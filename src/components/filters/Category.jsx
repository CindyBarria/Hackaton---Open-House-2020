import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Category.css";
import { ProductContext } from "../../context/ProductProvider";
import CategoriasBannerSuperior from "../../assets/CategoriasBannerSuperior.png";
import Buscador from "../../assets/Buscador.png";
import CategoriasBannerInferior from "../../assets/CategoriasBannerInferior.png";
import Categoria1 from "../../assets/Categoria-1.jpg";
import Categoria2 from "../../assets/Categoria-2.jpg";
import Categoria3 from "../../assets/Categoria-3.jpg";
import Categoria4 from "../../assets/Categoria-4.jpg";
import Categoria5 from "../../assets/Categoria-5.jpg";
import Categoria6 from "../../assets/Categoria-6.jpg";

const Category = () => {
  const {
    filter,
    setFilter,
    setFilterDifficulty,
    setFilterDiet,
  } = React.useContext(ProductContext);

  useEffect(() => {
    return () => {
      setFilterDifficulty("");
      setFilterDiet("");
    };
  }, [setFilterDifficulty, setFilterDiet]);

  return (
    <div className="categoryContainer">
      <img
        src={CategoriasBannerSuperior}
        alt=""
        style={{ marginTop: "56px" }}
        className="banner-vegetables-top"
      />

      <h1 className="leadTittle">
        Ricas<br></br> recetas
      </h1>

      <img
        src={Buscador}
        alt=""
        style={{ margin: "6%" }}
        className="search-img"
      />

      <h1 className="categoryTittle">Categorías</h1>

      <div>
        <div>
          <button
            className="button-category"
            active={filter ? "cocinaChilena" : undefined}
            onClick={() => setFilter("cocinaChilena")}
          >
            <Link to="/recipes" style={{ textDecoration: "none" }}>
              <div className="categoryButtons">
                <img src={Categoria1} alt="" className="img-category" />
                <h1 className="category-name" style={{ background: "#E56F2D" }}>
                  Cocina Chilena
                </h1>
              </div>
            </Link>
          </button>
        </div>
        <div>
          <button
            className="button-category"
            active={filter ? "cocinaParaNiños" : undefined}
            onClick={() => setFilter("cocinaParaNiños")}
          >
            <Link to="/recipes" style={{ textDecoration: "none" }}>
              {" "}
              <div className="categoryButtons">
                <img src={Categoria2} alt="" className="img-category" />
                <h1 className="category-name" style={{ background: "#9B8DC0" }}>
                  Cocina para Niños
                </h1>
              </div>
            </Link>
          </button>
        </div>

        <div>
          <button
            className="button-category"
            active={filter ? "postresYDulces" : undefined}
            onClick={() => setFilter("postresYDulces")}
          >
            <Link to="/recipes" style={{ textDecoration: "none" }}>
              {" "}
              <div className="categoryButtons">
                <img src={Categoria3} alt="" className="img-category" />
                <h1 className="category-name" style={{ background: "#CE7DA6" }}>
                  Postres y Dulces
                </h1>
              </div>
            </Link>
          </button>
        </div>

        <div>
          <button
            className="button-category"
            active={filter ? "agregados" : undefined}
            onClick={() => setFilter("agregados")}
          >
            <Link to="/recipes" style={{ textDecoration: "none" }}>
              {" "}
              <div className="categoryButtons">
                <img src={Categoria4} alt="" className="img-category" />
                <h1 className="category-name" style={{ background: "#473074" }}>
                  Agregados
                </h1>
              </div>
            </Link>
          </button>
        </div>
        <div>
          <button
            className="button-category"
            active={filter ? "platosDeFondo" : undefined}
            onClick={() => setFilter("platosDeFondo")}
          >
            <Link to="/recipes" style={{ textDecoration: "none" }}>
              {" "}
              <div className="categoryButtons">
                <img src={Categoria5} alt="" className="img-category" />
                <h1 className="category-name" style={{ background: "#AD4150" }}>
                  Platos de fondo
                </h1>
              </div>
            </Link>
          </button>
        </div>
        <div>
          <button
            className="button-category"
            active={filter ? "sopasYCremas" : undefined}
            onClick={() => setFilter("sopasYCremas")}
          >
            <Link to="/recipes" style={{ textDecoration: "none" }}>
              {" "}
              <div className="categoryButtons">
                <img src={Categoria6} alt="" className="img-category" />
                <h1 className="category-name" style={{ background: "#D5937D" }}>
                  Sopas y cremas
                </h1>
              </div>
            </Link>
          </button>
        </div>
      </div>
      <footer>
        <img
          src={CategoriasBannerInferior}
          alt=""
          style={{ marginBottom: "-2px" }}
          className="banner-vegetables-bottom"
        />
      </footer>
    </div>
  );
};

export default Category;

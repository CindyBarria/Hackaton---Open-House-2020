import React from "react";
import { Link } from "react-router-dom";
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";
import bannerSuperior from "../assets/BannerSuperior.png";
import bannerInferior from "../assets/BannerInferior.png";
import flecha from "../assets/Vector.png";

const Recipes = () => {
  const { todasRecetas, clickProduct } = React.useContext(ProductContext);

  return (
    <div className="container-recipes">
      <img src={bannerSuperior} alt="" style={{ marginTop: "-4px" }} />
      <p className="back">
        <img src={flecha} alt="" className="arrow" />
        <Link
          to="/category"
          style={{ color: "#0093AD", textDecoration: "none" }}
        >
          Volver
        </Link>
      </p>
      {todasRecetas.map((product) =>
        product.filtered === true ? (
          <h1 className="title-recipes">{product.title}</h1>
        ) : (
          ""
        )
      )}
      ;
      <div className="container-text">
        <p className="text">
          Encuentra el menú perfecto según tus preferencias y necesidades
        </p>
        <button className="button-find">Encontrar Aquí</button>
        <h1 className="title-recipesTwo">Recetas</h1>
      </div>
      {todasRecetas.map((product) =>
        product.filtered === true ? (
          <main>
            <button
              className="button-card"
              onClick={() => clickProduct(product)}
            >
              <Link to="/preparation" style={{ textDecoration: "none" }}>
                <div className="productCard" key={product.id}>
                  <img src={product.img} alt="" className="img-recipes" />
                  <h1 className="recipes-name">{product.name}</h1>
                </div>
              </Link>
            </button>
          </main>
        ) : (
          ""
        )
      )}
      <footer>
        <img src={bannerInferior} alt="" style={{ marginBottom: "-4px" }} />
      </footer>
    </div>
  );
};

export default Recipes;

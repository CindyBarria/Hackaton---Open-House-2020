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
          <h1 className="title-recipes" key={product.id}>
            {product.title}
          </h1>
        ) : (
          ""
        )
      )}
      ;
      <div className="container-text">
        <h1 className="title-recipesTwo">Recetas</h1>
      </div>
      {todasRecetas.map((product) =>
        product.filtered === true ? (
          <main>
            <button
              className="button-card"
              onClick={() => clickProduct(product)}
              key={product.id}
            >
              <Link to="/preparation" style={{ textDecoration: "none" }}>
                <div className="productCard">
                  <img src={product.img} alt="" className="img-recipes" />
                  <h1 className="recipes-name">{product.name}</h1>
                </div>
              </Link>
            </button>
          </main>
        ) : product.filteredD === true ? (
          <button key={product.id}>
            <div className="productCard">
              <p className="card-name">{product.name}</p>
            </div>
          </button>
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

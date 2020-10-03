import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";
import bannerInferior from "../assets/BannerInferior.png";
import Line from "../assets/Line-1.png";
import EasyIcon from "../assets/Easy.png";
import MediumIcon from "../assets/Medium.png";
import ChallengingIcon from "../assets/Challenging.png";
import Like from "../assets/Corazon.png";

const Recipes = () => {
  const { todasRecetas, clickProduct, filter } = React.useContext(ProductContext);

  return (
    <div className="container-recipes">
      <div className="container-text">
        {filter === "postresYDulces" ? (<h1 className="title-recipesTwo">Recetas</h1>) :
        filter === "cocinaChilena" ? (<h1 className="title-recipesTwo-Chilean">Recetas</h1>) :
        filter === "cocinaParaNiños" ? (<h1 className="title-recipesTwo-Kids">Recetas</h1>) :
        filter === "agregados" ? (<h1 className="title-recipesTwo-Sides">Recetas</h1>) :
        filter === "platosDeFondo" ? (<h1 className="title-recipesTwo-Principal">Recetas</h1>) :
            filter === "sopasYCremas" ? (<h1 className="title-recipesTwo-Soups">Recetas</h1>) :
                    undefined  }
        {/* <h1 className="title-recipesTwo">Recetas</h1> */}
      </div>
      {todasRecetas.map(
        (product) =>
          product.filtered === true &&
          product.filteredD && product.filteredDifficulty && (
            <main key={product.id}>
              <button
                className="button-card"
                onClick={() => clickProduct(product)}
              >
                <Link to="/preparation" style={{ textDecoration: "none" }}>
                  <div className="productCard">
                    <img src={product.img} alt="" className="img-recipes" />
                    <img src={Like} alt="Corazón me gusta" className="heart" />
                    {filter === "postresYDulces" ? (<h1 className="recipes-name">{product.name}</h1>) :
                    filter === "cocinaChilena" ? (<h1 className="recipes-name-chilean">{product.name}</h1>) :
                    filter === "cocinaParaNiños" ? (<h1 className="recipes-name-kids">{product.name}</h1>) :
                    filter === "agregados" ? (<h1 className="recipes-name-sides">{product.name}</h1>) :
                    filter === "platosDeFondo" ? (<h1 className="recipes-name-principal">{product.name}</h1>) :
                    filter === "sopasYCremas" ? (<h1 className="recipes-name-soups">{product.name}</h1>) :
                    undefined }
                    {/* <h1 className="recipes-name">{product.name}</h1> */}
                    <div className="container-extra-info">
                      <div className="difficulty-info">
                        {product.difficulty === "Fácil" ? (
                          <Fragment>
                            <img src={EasyIcon} alt="Icono fácil" />
                          </Fragment>
                        ) : product.difficulty === "Intermedio" ? (
                          <Fragment>
                            <img src={MediumIcon} alt="Icono intermedio" />
                          </Fragment>
                        ) : product.difficulty === "Desafiante" ? (
                          <Fragment>
                            <img src={ChallengingIcon} alt="Icono desafiante" />
                          </Fragment>
                        ) : undefined}
                        <p>{product.difficulty}</p>
                      </div>

                      <span>
                        <img src={Line} alt="Line divisora" />
                      </span>
                      <p className="time-info">
                        {product.time}{" "}
                        <span className="span-minuts">Minutos</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </button>
            </main>
          )
      )}
      <footer>
        <img src={bannerInferior} alt="" style={{ marginBottom: "-2px" }} className="banner-fruits-bottom" />
      </footer>
    </div>
  );
};

export default Recipes;

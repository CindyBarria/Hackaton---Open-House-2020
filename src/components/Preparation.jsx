import React, { Fragment, useEffect } from "react";
import "../styles/Preparation.css";
import bannerSuperior from "../assets/BannerSuperior.png";
import bannerInferior from "../assets/BannerInferior.png";
import flecha from "../assets/Vector.png";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import EasyIcon from "../assets/facil-gris.png";
import MediumIcon from "../assets/intermedio-gris.png";
import ChallengingIcon from "../assets/desafiante-gris.png";
import Share from "../assets/compartir.png";
import Download from "../assets/descargar.png";
import Add from "../assets/agregar.png";
import ArrowDown from "../assets/arrow-down.png";
import ReactPlayer from "react-player";
import Counter from "./counter";

const Preparation = () => {
  const { preparacion, setPreparacion } = React.useContext(ProductContext);

  useEffect(() => {
    return () => {
      setPreparacion("");
    };
  }, [setPreparacion]);

  return (
    <div>
      <img src={bannerSuperior} alt="" style={{ marginTop: "-4px" }} />
      <p className="back">
        <img src={flecha} alt="" className="arrow" />
        <Link
          to="/recipes"
          style={{ color: "#0093AD", textDecoration: "none" }}
          className="back-text"
        >
          Volver
        </Link>
      </p>

      <div preparacion={preparacion}>
        {preparacion.map((product) =>
          preparacion.length > 0 ? (
            <div key={product.id}>
              <h1 className="recipe-name">{product.name}</h1>
              <div className="container-info-preparation">
                <div className="difficulty-preparation">
                  {product.difficulty === "Fácil" ? (
                    <Fragment>
                      <img
                        src={EasyIcon}
                        alt="Icono fácil"
                        className="icon-difficulty"
                      />
                    </Fragment>
                  ) : product.difficulty === "Intermedio" ? (
                    <Fragment>
                      <img
                        src={MediumIcon}
                        alt="Icono intermedio"
                        className="icon-difficulty"
                      />
                    </Fragment>
                  ) : product.difficulty === "Desafiante" ? (
                    <Fragment>
                      <img
                        src={ChallengingIcon}
                        alt="Icono desafiante"
                        className="icon-difficulty"
                      />
                    </Fragment>
                  ) : undefined}
                  <h1 className="info-top-img">{product.difficulty}</h1>
                </div>
                <h1 className="time-preparation">
                  {product.time} <span className="minuts">Minutos</span>
                </h1>
                <h1 className="portions-preparation">
                  {product.portions}
                  <span className="minuts">Pers.</span>
                </h1>
              </div>
              <div>
                <img src={product.img} alt="" className="img-preparation" />
                <Counter />
              </div>
              <div className="container-box">
                <p className="share-download">
                  ¡Comparte o descarga esta receta!
                </p>
                <div className="icon-share">
                  <img src={Share} alt="" style={{ marginRight: "34%" }}></img>
                  <img src={Download} alt=""></img>
                </div>
              </div>
              <h1 className="ingredients-title">INGREDIENTES</h1>
              <div className="ingredient-div">
                {product.ingredients.map((ingredients, i) => (
                  <div className="container-ingredients" key={i}>
                    <p className="text-ingredients"> </p>
                    <img src={Add} alt="" className="img-add" />
                    {ingredients}
                  </div>
                ))}
              </div>
              <div className="container-button-buy">
                <button className="add">
                  <p> Agregar al Carro</p>
                </button>
                <button className="buy">
                  <p>Comprar</p>
                </button>
              </div>
              <div className="container-nutritional">
                <h1 className="nutritional-title">VALOR NUTRICIONAL</h1>
                <h1 className="nutritional-preparation">
                  {product.nutrititional}
                  <span className="kcal">KCAL</span>
                  <img src={ArrowDown} alt="" style={{ padding: "7%" }} />
                </h1>
              </div>
              <div className="container-video">
                <h1 className="preparation-title">PREPARACIÓN</h1>
                <div className="video">
                  <ReactPlayer
                    width={350}
                    height={150}
                    url="https://www.youtube.com/watch?v=JoxYdNF_Vr8&feature=emb_title"
                    controls={true}
                  />
                </div>
              </div>
              <div className="container-preparation">
                <ol>
                  {product.preparation.map((preparation, i) => (
                    <div className="li-preparation" key={i}>
                      <li> </li>
                      <p className="text-preparation">{preparation}</p>
                    </div>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <footer>
        <img src={bannerInferior} alt="" style={{ marginBottom: "-4px" }} />
      </footer>
    </div>
  );
};

export default Preparation;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import BannerSuperiorHome from "../assets/CategoriasBannerSuperior.png";
import BannerInferiorHome from "../assets/CategoriasBannerInferior.png";
import Nacho from "../assets/Nachito.png";
import MenuSemanal from "../assets/menusemanal.png";
import Tips from "../assets/tips.png";
import ReactPlayer from "react-player";
import Carrusel from "../assets/carrusel.png";
import Buscador from "../assets/Buscador.png";
const Home = () => {
  return (
    <div className="container-home">
      <img
        src={BannerSuperiorHome}
        alt=""
        style={{ marginTop: "56px" }}
        className="banner-vegetables-top"
      />
      <h1 className="title-home">¡Hola!</h1>
      <img
        src={Buscador}
        alt=""
        style={{ margin: "-1% 0% 7% 0%" }}
        className="search-img"
      />
      <div className="recipes-containerhome">
        <h1 style={{ fontSize: "22px", fontWeight: "bold" }}>
          RECETAS EN CASA
        </h1>
        <p className="p">
          Descubre las mejores recetas hechas para ti y toda tu familia.
        </p>
        <button className="getIn">
          <Link
            to="/category"
            style={{ textDecoration: "none", color: "white" }}
          >
            Ver Recetas
          </Link>
        </button>
      </div>

      <img
        src={BannerInferiorHome}
        alt=""
        style={{ marginBottom: "-2px" }}
        className="banner-vegetables-bottom"
      />
      <img className="nacho" src={Nacho} alt="" />
      <div className="text-containerGray">
        <p>
          En cada receta encontrarás un video de Nacho explicándote paso a paso
          toda la preparación.
        </p>
        <br></br>
        <p>Además, nuestro chef ha creado para ti:</p>
      </div>
      <div className="weekly-menu">
        <img src={MenuSemanal} alt="" />
        <h1 className="title-menu">MENÚ SEMANAL</h1>
        <p>¡Recetas sencillas y fáciles para toda la semana!</p>
        <button className="see-menus">Ver menú</button>
      </div>
      <div className="tips">
        <img src={Tips} alt="" />
        <h1 className="title-tips">TIPS</h1>
        <p style={{ marginBottom: "4%" }}>
          Consejos esenciales y muy útiles para tu día a día.
        </p>
        <div className="react-player-wrapper">
          <ReactPlayer
            className="react-player"
            width={265}
            height={232}
            url="https://www.youtube.com/watch?v=JoxYdNF_Vr8&feature=emb_title"
            controls={true}
          />
        </div>

        <img src={Carrusel} alt="" style={{ marginTop: "13px" }} />
        <button className="see-tips">Ver tips</button>
      </div>
      <img
        src={BannerInferiorHome}
        alt=""
        style={{ marginBottom: "-2px" }}
        className="banner-vegetables-bottom"
      />
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import bannerSuperior from "../assets/BannerSuperior.png";
import flecha from "../assets/Vector.png";
import "../styles/Recipes.css";

const BannerHeader2 = () => {
  return (
    <div>
      <img
        src={bannerSuperior}
        alt=""
        style={{ marginTop: "56px" }}
        className="banner-fruits-top"
      />
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
    </div>
  );
};

export default BannerHeader2;

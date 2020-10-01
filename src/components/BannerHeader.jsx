import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import bannerSuperior from "../assets/BannerSuperior.png";
import flecha from "../assets/Vector.png";
import "../styles/Recipes.css";

const BannerHeader = () => {
  return (
    <Fragment>
      <img
        src={bannerSuperior}
        alt=""
        style={{ marginTop: "56px" }}
        className="banner-fruits-top"
      />
      <p className="back">
        <img src={flecha} alt="" className="arrow" />
        <Link
          to="/category"
          style={{ color: "#0093AD", textDecoration: "none" }}
          className="back-text"
        >
          Volver
        </Link>
      </p>
    </Fragment>
  );
};

export default BannerHeader;

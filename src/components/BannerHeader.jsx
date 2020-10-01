import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import bannerSuperior from "../assets/1_banner-verduras-superior.png";
import flecha from "../assets/Vector.png";
import "../styles/Recipes.css";

const BannerHeader = () => {
  return (
    <Fragment>
      <img src={bannerSuperior} alt="" style={{ marginTop: "-14px" }} />
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

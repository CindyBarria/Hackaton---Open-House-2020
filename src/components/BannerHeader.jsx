import React from "react";
import { Link } from "react-router-dom";
import bannerSuperior from "../assets/BannerSuperior.png";
import flecha from "../assets/Vector.png";
import "../styles/Recipes.css";

const BannerHeader = () => {
  return (
    <div>
      <img src={bannerSuperior} alt="" style={{ marginTop: "-4px" }} />
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
    </div>
  );
};

export default BannerHeader;

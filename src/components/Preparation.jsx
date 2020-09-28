import React from "react";
import "../styles/Preparation.css";
import bannerSuperior from "../assets/BannerSuperior.png";
import bannerInferior from "../assets/BannerInferior.png";
import flecha from "../assets/Vector.png";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

const Preparation = () => {
  const { preparacion } = React.useContext(ProductContext);
  return (
    <div>
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

      <div preparacion={preparacion}>
        {preparacion.map((product) =>
          preparacion.length > 0 ? (
            <div>
              <h1 className="title-recipes">{product.name}</h1>
              <img src={product.img} alt="" className="img-recipes" />
              <p>{product.difficulty}</p>
              <p>{product.time}</p>
              <p>{product.portions}</p>
              <p>{product.ingredients}</p>
              <p>{product.nutrititional}</p>
              <p>{product.preparation}</p>
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

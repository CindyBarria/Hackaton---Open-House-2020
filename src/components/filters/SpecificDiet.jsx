import React, { useEffect } from "react";
import "../../styles/SpecificDiet.css";
import { ProductContext } from "../../context/ProductProvider";
import { Link } from "react-router-dom";
import VegetarianIcon from "../../assets/Vegetariana.png";
import VeganIcon from "../../assets/Shape.png";
import GlutenFreeIcon from "../../assets/Sin-Gluten.png";
import ImgRight from '../../assets/frutas2-ladoderecho.png';
import ImgLeft from '../../assets/frutas1-ladoizquierdo.png';
import RecipesCategoryTitle from "../RecipesCategoryTitle";

const SpecificDiet = () => {
  const { filterDiet, setFilterDiet } = React.useContext(ProductContext);

  useEffect(() => {
    return () => {
      setFilterDiet("");
    };
  }, [setFilterDiet]);

  return (
    <div className="container-filters">

      <div className="container-banner-diet">
        <img src={ImgLeft} alt="" width={70}/>
        <RecipesCategoryTitle />
        <img src={ImgRight} alt="" width={70}/>
      </div>
      <h2 className="title-container-diet">¿Sigues alguna dieta?</h2>

      <div className="container-btn-filter">
        <button
          className="btn-filter"
          active={filterDiet ? "vegetariana" : undefined}
          onClick={() => setFilterDiet("vegetariana")}
        >
          {" "}
          <span>
            <img src={VegetarianIcon} alt="Icono vegetariano" />
          </span>{" "}
          VEGETARIANA
        </button>

        <button
          className="btn-filter"
          active={filterDiet ? "vegana" : undefined}
          onClick={() => setFilterDiet("vegana")}
        >
          {" "}
          <span>
            <img src={VeganIcon} alt="Icono vegano" />
          </span>{" "}
          VEGANA
        </button>

        <button
          className="btn-filter"
          active={filterDiet ? "sinGluten" : undefined}
          onClick={() => setFilterDiet("sinGluten")}
        >
          {" "}
          <span>
            <img
              src={GlutenFreeIcon}
              alt="Icono sin gluten"
              className="gluten-free-icon"
            />
          </span>{" "}
          SIN GLUTEN
        </button>
      </div>

      <div className="container-btn-bn">
        <button className="btn-back">
          <Link to="/recipes">Atrás</Link>
        </button>

        <button className="btn-next">
          <Link to="/recipes">Siguiente</Link>
        </button>
      </div>
    </div>
  );
};

export default SpecificDiet;

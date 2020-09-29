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

  const handleClick = (e) => {
    setFilterDiet("sinGluten");
    e.target.classList.add("btn-active");
    document.querySelector("#btnVegan").classList.remove("btn-active");
    document.querySelector("#btnVegetarian").classList.remove("btn-active");
  }

  const handleClickVege = (e) => {
    setFilterDiet("vegetariana");
    e.target.classList.add("btn-active");
    document.querySelector("#btnGluten").classList.remove("btn-active");
    document.querySelector("#btnVegan").classList.remove("btn-active");
  }

  const handleClickVegan = (e) => {
    setFilterDiet("vegana");
    e.target.classList.add("btn-active");
    document.querySelector("#btnGluten").classList.remove("btn-active");
    document.querySelector("#btnVegetarian").classList.remove("btn-active");
  }

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
          id="btnVegetarian"
          active={filterDiet ? "vegetariana" : undefined}
          onClick={(e) => handleClickVege(e)}
        >
          {" "}
          <span>
            <img src={VegetarianIcon} alt="Icono vegetariano" />
          </span>{" "}
          <h1 className="diet-name">VEGETARIANA</h1>
        </button>

        <button
          className="btn-filter"
          id="btnVegan"
          active={filterDiet ? "vegana" : undefined}
          onClick={(e) => handleClickVegan(e)}
        >
          {" "}
          <span>
            <img src={VeganIcon} alt="Icono vegano" />
          </span>{" "}
          <h1 className="diet-name">VEGANA</h1>
        </button>

        <button
          className="btn-filter"
          id="btnGluten"
          active={filterDiet ? "sinGluten" : undefined}
          onClick={(e) => handleClick(e)}
        >
          {" "}
          <span>
            <img
              src={GlutenFreeIcon}
              alt="Icono sin gluten"
              className="gluten-free-icon"
            />
          </span>{" "}
          <h1 className="diet-name">SIN GLUTEN</h1>
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

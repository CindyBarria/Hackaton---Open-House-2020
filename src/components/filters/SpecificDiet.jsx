import React, { useEffect } from "react";
import "../../styles/SpecificDiet.css";
import { ProductContext } from "../../context/ProductProvider";
import { Link } from "react-router-dom";
import VegetarianIcon from "../../assets/Vegetariana.png";
import VeganIcon from "../../assets/Shape.png";
import GlutenFreeIcon from "../../assets/Sin-Gluten.png";

const SpecificDiet = () => {
  const { filterDiet, setFilterDiet } = React.useContext(ProductContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      setFilterDiet("");
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="container-filters">
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
          {/* <Link to="/recipes" className="diet-name">VEGETARIANA</Link> */}
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
          {/* <Link to="/recipes" className="diet-name">VEGANA</Link> */}
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
          {/* <Link to="/recipes" className="diet-name">SIN GLUTEN</Link> */}
        </button>
      </div>

      <div className="container-btn-bn">
        <button className="btn-back">
          <Link to="/recipes">Atrás</Link>
        </button>

        <button className="btn-next" onClick={() => setFilterDiet(filterDiet)}>
          <Link to="/recipes">Siguiente</Link>
        </button>
      </div>
    </div>
  );
};

export default SpecificDiet;

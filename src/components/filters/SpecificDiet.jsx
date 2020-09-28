import React from "react";
import "../../styles/SpecificDiet.css";
import { ProductContext } from "../../context/ProductProvider";
import { Link } from "react-router-dom";

const SpecificDiet = () => {

  const { filterDiet, setFilterDiet } = React.useContext(ProductContext);

  

  return (
    <div className="container-filters">
      <h2 className="title-container-diet">¿Sigues alguna dieta?</h2>

      <div className="container-btn-filter">

      <button 
      className="btn-filter"
      active={filterDiet ? "vegetariana" : undefined}
      onClick={() => setFilterDiet("vegetariana")}
      > VEGETARIANA
      {/* <Link to="/recipes" className="diet-name">VEGETARIANA</Link> */}
      </button>

      <button
      className="btn-filter"
      active={filterDiet ? "vegana" : undefined}
      onClick={() => setFilterDiet("vegana")}
      > VEGANA
      {/* <Link to="/recipes" className="diet-name">VEGANA</Link> */}
      </button>

      <button
      className="btn-filter"
      active={filterDiet ? "sinGluten" : undefined}
      onClick={() => setFilterDiet("sinGluten")}
      > SIN GLUTEN
      {/* <Link to="/recipes" className="diet-name">SIN GLUTEN</Link> */}
      </button>

      </div>

      <div className="container-btn-bn">
        <button className="btn-back">
          <Link to="/category">Atrás</Link>
          
        </button>

        <button 
        className="btn-next"
        onClick={() => setFilterDiet(filterDiet)}
        >
        <Link to="/recipes" >Siguiente</Link>
          
        </button>
      </div>

      

    </div>
  );
};

export default SpecificDiet;

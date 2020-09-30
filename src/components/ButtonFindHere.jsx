import React, {Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";

function ButtonFindHere() {
  const { setFilterDifficulty, setFilterDiet } = React.useContext(ProductContext);

   useEffect(() => {
        return () => {
          setFilterDifficulty("");
          setFilterDiet("");
        };
      }, [setFilterDifficulty, setFilterDiet]);

  return (
    <Fragment>

    <div className="container-button-find">
      <p className="text">
        Encuentra el menú perfecto según tus preferencias y necesidades
      </p>
      <button className="button-find">
        {" "}
        <Link to="/diet">Encontrar Aquí</Link>
      </button>
    </div>
    </Fragment>
  );
}

export default ButtonFindHere;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ButtonFindHere() {
  return (
    <Fragment>
      <p className="text">
        Encuentra el menú perfecto según tus preferencias y necesidades
      </p>
      <button className="button-find">
        {" "}
        <Link to="/diet">Encontrar Aquí</Link>
      </button>
    </Fragment>
  );
}

export default ButtonFindHere;

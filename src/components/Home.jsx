import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a home</h1>
      <p>Soy el home</p>

      <button>
        <Link to="/category">Ingresar</Link>
      </button>
    </div>
  );
};

export default Home;

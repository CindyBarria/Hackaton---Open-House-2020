import React from "react";
import { Link } from "react-router-dom";
import Counter from "./counter";

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a home</h1>
      <p>Soy el home</p>
      <Counter/>
      <button>
        <Link to="/category">Ingresar</Link>
      </button>
    </div>
  );
};

export default Home;

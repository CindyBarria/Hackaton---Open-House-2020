import React from "react";
import Buscador from "../assets/Buscador.png";
import '../styles/Search.css';

const Search = () => {
  return (
    <div className="search-component">
      <img src={Buscador} alt="" className="search-img"/>
    </div>
  );
}

export default Search;

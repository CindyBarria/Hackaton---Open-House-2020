import React from 'react';
import EasyGrey from '../../assets/facil-gris.png';
import MediumGrey from '../../assets/intermedio-gris.png';
import ChallengingGrey from '../../assets/desafiante-gris.png';
import { ProductContext } from "../../context/ProductProvider";
import { Link } from "react-router-dom";
import ImgRight from '../../assets/frutas2-ladoderecho.png';
import ImgLeft from '../../assets/frutas1-ladoizquierdo.png';
import RecipesCategoryTitle from "../RecipesCategoryTitle";
import "../../styles/SpecificDiet.css";

const DifficultyLevel = () => {

    const { filterDifficulty, setFilterDifficulty } = React.useContext(ProductContext);
        
      const handleClickEasy = () => {
        setFilterDifficulty("Fácil");
        document.getElementById("btnEasy").classList.add("btn-active");
        document.getElementById("btnMedium").classList.remove("btn-active");
        document.getElementById("btnChallenge").classList.remove("btn-active");
      }
    
      const handleClickMedium = () => {
        setFilterDifficulty("Intermedio");
        document.getElementById("btnMedium").classList.add("btn-active");
        // e.target.classList.add("btn-active");
        document.getElementById("btnEasy").classList.remove("btn-active");
        document.getElementById("btnChallenge").classList.remove("btn-active");
      }
    
      const handleClickChallenging = () => {
        setFilterDifficulty("Desafiante");
        document.getElementById("btnChallenge").classList.add("btn-active");
        document.getElementById("btnEasy").classList.remove("btn-active");
        document.getElementById("btnMedium").classList.remove("btn-active");
      }

    return (
        <div className="container-filters">

      <div className="container-banner-diet">
        <img src={ImgLeft} alt="" width={70}/>
        <RecipesCategoryTitle />
        <img src={ImgRight} alt="" width={70}/>
      </div>
      <h2 className="title-container-diet">¿En cuál dificultad prefieres cocinar?</h2>

      <div className="container-btn-filter">
        <button
          className="btn-filter"
          id="btnEasy"
          active={filterDifficulty ? "Fácil" : undefined}
          onClick={() => handleClickEasy()}
        >
          {" "}
          <span className="diet-span">
            <img src={EasyGrey} alt="Icono dificultad fácil" className="img-difficulty"/>
          </span>{" "}
          <h1 className="diet-name">Fácil</h1>
        </button>

        <button
          className="btn-filter"
          id="btnMedium"
          active={filterDifficulty ? "Intermedio" : undefined}
          onClick={() => handleClickMedium()}
        >
          {" "}
          <span className="diet-span">
            <img src={MediumGrey} alt="Icono dificultad media" className="img-difficulty" />
          </span>{" "}
          <h1 className="diet-name">Intermedio</h1>
        </button>

        <button
          className="btn-filter"
          id="btnChallenge"
          active={filterDifficulty ? "Desafiante" : undefined}
          onClick={() => handleClickChallenging()}
        >
          {" "}
          <span className="diet-span">
            <img src={ChallengingGrey} alt="Icono dificultad desafiante" className="img-difficulty" />
          </span>{" "}
          <h1 className="diet-name">Desafiante</h1>
        </button>
      </div>

      <div className="container-btn-bn">
        <button className="btn-back">
          <Link to="/diet">Atrás</Link>
        </button>

        <button className="btn-next">
          <Link to="/recipesforyou">¡Listo!</Link>
        </button>
      </div>
    </div>
        
    )
}

export default DifficultyLevel;

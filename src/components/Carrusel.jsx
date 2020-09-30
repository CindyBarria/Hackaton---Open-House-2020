import Leche from "../assets/1_leche-colun.png";
import Huevo from "../assets/2_huevos-unimarc.png";
import Azucar from "../assets/3_azucar-iansa.png";
import Naranjas from "../assets/4_naranjas.png";
import Canela from "../assets/5_canela-gourmet.png";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carrusel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="img-carrusel" src={Leche} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carrusel" src={Huevo} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carrusel" src={Azucar} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carrusel" src={Naranjas} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carrusel" src={Canela} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;

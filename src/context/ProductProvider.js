import { getAllByAltText } from "@testing-library/react";
import React from "react";
import data from "../components/data/product.json";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [dataAll, setDataAll] = React.useState([]);
  /*   const [chilena, setChilena] = React.useState([]); */
  const [filterChilena, setFilterChilena] = React.useState([]);
  /*   const [vegetariana, setVegetariana] = React.useState([]); */

  React.useEffect(() => {
    /*    getProduct(); */
    filterProduct();
  }, []);

  /*   const getProduct = async () => {
    try {
      const chilean = data.cocinaChilena;
      const vegetariana = data.vegetariana;
      setChilena(chilean);
      setVegetariana(vegetariana);
    } catch (error) {
      console.log(error);
    }
  }; */
  const filterProduct = () => {
    try {
      console.log("hola soy filtro");

      const arrayData = data;
      const arrayChilena = arrayData.filter(
        (arrayData) => arrayData.category === "cocinaChilena"
      );
      console.log(arrayData, "data");
      setDataAll(arrayData);
      setFilterChilena(arrayChilena);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        dataAll,
        /*         setDataAll,
        chilena,
        vegetariana, */
        filterChilena,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

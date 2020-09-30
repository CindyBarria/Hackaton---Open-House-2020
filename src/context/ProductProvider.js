import React from "react";
import recetas from "../components/data/product.js";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  //hooks ---------------------------------------------
  const [todasRecetas, setRecetas] = React.useState([]);
  const [filter, setFilter] = React.useState("all");
  const [filterDiet, setFilterDiet] = React.useState("");
  const [preparacion, setPreparacion] = React.useState([]);
  const [filterDifficulty, setFilterDifficulty] = React.useState("");

  //useEffect ---------------------------------------------
  React.useEffect(() => {
    setRecetas(recetas);
  }, []);

  React.useEffect(() => {
    setRecetas([]);

    const filtered = recetas.map((p) => ({
      ...p,
      filtered: filter ? p.category.includes(filter) : true, // !filter || p.category.includes(filter)
      filteredD: filterDiet ? p.diet.includes(filterDiet) : true,
      filteredDifficulty: filterDifficulty ? p.difficulty.includes(filterDifficulty) : true,
    }));

    setRecetas(filtered);
  }, [filter, filterDiet, filterDifficulty]);

  const clickProduct = (product) => {
    let receta = {
      id: product.id,
      name: product.name,
      img: product.img,
      ingredients: product.ingredients,
      preparation: product.preparation,
      difficulty: product.difficulty,
      time: product.time,
      portions: product.portions,
      nutrititional: product.nutrititional,
    };

    setPreparacion([...preparacion, receta]);
  };

  return (
    <ProductContext.Provider
      value={{
        setFilter,
        filter,
        todasRecetas,
        filterDiet,
        setFilterDiet,
        clickProduct,
        preparacion,
        setPreparacion,
        filterDifficulty,
        setFilterDifficulty,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

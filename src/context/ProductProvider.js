import React from "react";
import recetas from "../components/data/product.js";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  //hooks ---------------------------------------------
  const [todasRecetas, setRecetas] = React.useState([]);
  const [filter, setFilter] = React.useState("all");

  //useEffect ---------------------------------------------
  React.useEffect(() => {
    setRecetas(recetas);
  }, []);

  React.useEffect(() => {
    setRecetas([]);

    const filtered = recetas.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));

    setRecetas(filtered);
  }, [filter]);

  return (
    <ProductContext.Provider
      value={{
        setFilter,
        filter,
        todasRecetas,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

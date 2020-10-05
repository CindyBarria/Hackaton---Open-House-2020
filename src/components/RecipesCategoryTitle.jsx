import React, { Fragment } from "react";
import "../styles/Recipes.css";
import "../styles/RecipesCategoryTitle.css";
import { ProductContext } from "../context/ProductProvider";

const RecipesCategoryTitle = () => {
  const { todasRecetas } = React.useContext(ProductContext);

  return (
    <div className="container-title-recipes">
      {todasRecetas.map((product) =>
        product.filtered === true ? (
          <Fragment key={product.id}>
            {product.title === 'Postres & Dulces' ? (<h1 className="title-recipes" >
              {product.title}
            </h1>) : product.title === "Cocina para niños" ? (<h1 className="title-recipes-kids" >
              {product.title}
            </h1>) : product.title === "Cocina Chilena" ? (<h1 className="title-recipes-chilean" >
              {product.title}
            </h1>) : product.title === "Agregados" ? (<h1 className="title-recipes-sides" >
              {product.title}
            </h1>) : product.title === "Platos de Fondo" ? (<h1 className="title-recipes-principal" >
              {product.title}
            </h1>) : product.title === "Sopas & Cremas" ? (<h1 className="title-recipes-soups" >
              {product.title}
            </h1>) : undefined}
            
          </Fragment>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default RecipesCategoryTitle;

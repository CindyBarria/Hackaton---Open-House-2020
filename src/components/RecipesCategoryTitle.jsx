import React, { Fragment } from "react";
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";

const RecipesCategoryTitle = () => {
  const { todasRecetas } = React.useContext(ProductContext);

  return (
    <div className="container-title-recipes">
      {todasRecetas.map((product) =>
        product.filtered === true ? (
          <Fragment key={product.id}>
            <h1 className="title-recipes" >
              {product.title}
            </h1>
          </Fragment>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default RecipesCategoryTitle;

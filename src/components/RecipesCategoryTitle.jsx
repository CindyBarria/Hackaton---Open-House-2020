import React, { Fragment } from 'react';
import "../styles/Recipes.css";
import { ProductContext } from "../context/ProductProvider";

const RecipesCategoryTitle = () => {

    const { todasRecetas } = React.useContext(ProductContext);

    return (
        <Fragment>
            {todasRecetas.map((product) =>
        product.filtered === true ? (
          <h1 className="title-recipes" key={product.id}>
            {product.title}
          </h1>
        ) : (
          ""
        )
      )} 
            
        </Fragment>
    )
}

export default RecipesCategoryTitle;

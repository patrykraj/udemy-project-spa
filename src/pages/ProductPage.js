import React from "react";
import { Link, Route } from "react-router-dom";

import Product from "../components/Product";

const ProductPage = props => {
  const link = props.match.path.slice(0, 8) + "s";

  const article = <Product name={props.match.params.name} />;

  console.log(props);
  return (
    <div className="product">
      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          console.log(props.match.url);
          return (
            <>
              <Link to="/">home</Link>
              <span> / </span>
              <Link to={link}>{props.match.url.split("/")[1] + "s"}</Link>
              <span> / </span>
              <Link to={props.match.url}>{props.match.url.split("/")[2]}</Link>
            </>
          );
        }}
      />

      <h3>Strona produktu</h3>
      {article}
      <Link to={link}>Powrót do listy produktów</Link>
    </div>
  );
};

export default ProductPage;

import React from "react";
import { Link } from "react-router-dom";

import "../styles/ProductsList.css";

const products = ["kurczak", "ryż", "kreatyna"];

const ProductsListPage = () => {
  const links = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <>
      <h2
        style={{
          marginTop: "1rem"
        }}
      >
        Lista produktów:
      </h2>
      <div className="productsList">
        <ul>{links}</ul>
      </div>
    </>
  );
};

export default ProductsListPage;

import React from "react";
import Product from "./Product";

export default function PopularDecor() {
  return (
    <div className="screen screen-popular-decor">
      <div className="screen__heading">
        <h3>Популярный декор</h3>
      </div>
      <div className="popular-decor">
        <Product />
        <Product />
        <Product />
      </div>
      <a href="" className="link see-all-decor">
        Посмотреть все
      </a>
    </div>
  );
}

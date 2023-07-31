import React from "react";
import Product from "./Product";

export default function PopularPlants() {
  return (
    <div className="screen screen-popular-plants">
      <div className="screen__heading">
        <h3>Популярные растения</h3>
      </div>
      <div className="popular-plants">
        <Product title="Банановая пальма" price="5000" />
        <Product title="Фикус эластика" price="4500" />
        <Product title="Монстера" price="6000" />
      </div>
      <a href="" className="link see-all-plants">
        Посмотреть все
      </a>
    </div>
  );
}

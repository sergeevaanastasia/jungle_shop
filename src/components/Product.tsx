import React, { useState } from "react";
import Plant from "../images/Ban.png";

export default function Product({ title, price }: any) {
  let [productCount, setProductCount] = useState(1);

  function onClickPlusBtn() {
    if (productCount < 10) {
      setProductCount(productCount + 1);
    }
  }

  function onClickMinusBtn() {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  }

  return (
    <div className="product">
      <h4 className="product__name">{title}</h4>
      <img className="product__image" src={Plant} alt="product" />
      {/* <p className="product__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
        laudantium!
      </p> */}
      <div className="product__select">
        <div className="product-count">
          <button onClick={onClickMinusBtn} className="select__btn minus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path d="M19.4614 13H5.46143V11H19.4614V13Z" fill="#060825" />
            </svg>
          </button>
          <b>{productCount}</b>
          <button onClick={onClickPlusBtn} className="select__btn plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#060825" />
            </svg>
          </button>
        </div>

        <div className="product__price">{price} ₽</div>
      </div>

      <button className="btn add-to-cart">Добавить в корзину</button>
    </div>
  );
}

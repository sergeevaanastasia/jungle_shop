import React from "react";
import Decor1 from "../images/decor1.jpeg";
import Decor2 from "../images/decor2.png";
import Decor3 from "../images/decor3.jpg";

export default function Gallery() {
  return (
    <div className="landscaping">
      <div className="landscaping__text">
        Наша небольшая команда всегда рада помочь тебе сделать лучший выбор для
        твоего интерьера, а также сможет подобрать идеальное оформление
        пространства зеленью. Растения оживят любую комнату в помещении.
      </div>
      <div className="landscaping__gallery">
        <div className="gallery__slide prev-slide">
          <img src={Decor1} alt="decor example" />
        </div>
        <div className="gallery__slide active-slide">
          <img src={Decor2} alt="decor example" />
        </div>
        <div className="gallery__slide next-slide">
          <img src={Decor3} alt="decor example" />
        </div>
      </div>
      <div className="gallery__btns">
        <button className="btn gallery__btn"></button>
        <button className="btn gallery__btn active-btn"></button>
        <button className="btn gallery__btn"></button>
      </div>
    </div>
  );
}

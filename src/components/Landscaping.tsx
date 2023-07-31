import React from "react";
import Gallery from "./Gallery";

export default function Landscaping() {
  return (
    <div>
      <div className="screen screen-landscaping">
        <div className="screen__heading">
          <h3>Озеленение интерьера</h3>
        </div>
        <Gallery />
        <a href="" className="link see-all-gallery">
          Посмотреть галлерею работ
        </a>
      </div>
    </div>
  );
}

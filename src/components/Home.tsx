import React from "react";
import Logo from "../images/logo white.png";
import Cart from "../images/cart.svg";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="screen screen-home">
        <header>
          <a href="/">
            <div className="header__logo">
              <img src={Logo} width="32" height="32" alt="Logo" />
              <h1>JUNGLE</h1>
            </div>
          </a>
          <nav>
            <ul>
              <li>
                <a href="">Растения</a>
              </li>
              <li>
                <a href="">Декор</a>
              </li>
              <li>
                <a href="">Озеленение интерьера</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
            <div className="cart">
              <a href="">
                <img src={Cart} width="25" height="25" alt="Cart" />
              </a>
            </div>
          </nav>
        </header>

        <div className="welcome-card">
          <p className="welcome__subheading">Welcome to the</p>
          <h2>JUNGLE</h2>
          <p className="welcome__text">
            Подбери для своего интерьера тропические растения, декор или
            воспользуйся услугами наших флористов-декораторов
          </p>
          <button className="btn welcome__btn">Исследовать джунгли</button>
        </div>
      </div>
    </div>
  );
}

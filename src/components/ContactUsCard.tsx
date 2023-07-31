import React from "react";

export default function ContactUsCard() {
  return (
    <div className="contact-us-card">
      <form action="">
        <div className="contact-us__inputs">
          <input className="contact-us__input" type="text" placeholder="Имя" />
          <input
            className="contact-us__input"
            type="text"
            placeholder="Телефон для связи"
          />
        </div>
        <textarea
          className="contact-us__area"
          name=""
          id=""
          placeholder="Сообщение"
        ></textarea>
      </form>
      <button className="btn contact-us__btn">Отправить сообщение</button>
    </div>
  );
}

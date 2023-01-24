import React, { useState } from "react";
import "./ItemCard.css";

const cards = document.querySelectorAll(".card");

[...cards].forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});

const ItemCard = ({ frontContent, backContent }) => {
  return (
    <div className="card">
      <div className="card__face card__face--front">{frontContent}</div>
      <div className="card__face card__face--back">{backContent}</div>
    </div>
  );
};

export default ItemCard;

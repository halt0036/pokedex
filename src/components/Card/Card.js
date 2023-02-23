import React from "react";
import "./Card.css";
import plus from "../../assets/plus.png";

const Card = ({ text, onClick, index }) => {
  return (
    <div className="card" onClick={onClick}>
      <h1>{text}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        className="poke-img"
        alt="pokemon imagem"
      />
      <span>
        <img src={plus} className="icon" alt="icone" />
      </span>
    </div>
  );
};

export default Card;

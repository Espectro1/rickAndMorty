import React from "react";
import { Link } from "react-router-dom";
import { Favorite } from "../Favorite";
import "./card.css";

export const Card = ({ id, imageUrl, name, status, species }) => {
  return (
    <div className="card_container">
      <Favorite id={id} />
      <Link className="link" to={`characters/${id}`}>
        <div className="card_image_container">
          <img className="card_image" src={imageUrl} alt="personaje"></img>
        </div>
        <div className="card_info">
          <div className="line_info">Nombre: {name}</div>
          <div className="line_info">Estatus: {status}</div>
          <div className="line_info">Especie: {species}</div>
        </div>
      </Link>
    </div>
  );
};

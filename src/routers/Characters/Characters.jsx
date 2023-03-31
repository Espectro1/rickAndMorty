import { Link } from "react-router-dom";
import { Favorite } from "../../components/Favorite";
import { useCharacters } from "./useCharacters";
import "./characters.css";

export const Characters = () => {
  const {
    image,
    name,
    gender,
    location,
    origin,
    species,
    status,
    isError,
    isLoading,
    getIdFromUrl,
  } = useCharacters();

  return (
    <div className="main_character_container">
      <div className="container_character">
        <div className="card_character">
          <div className="header_card">
            <Link className="btn_back" to="/">
              {" "}
              Atras
            </Link>
          </div>
          {isLoading ? (
            <div className="error">Cargando datos</div>
          ) : isError ? (
            <div className="error">
              {" "}
              No hay datos, personaje inexistente o hubo algun error
            </div>
          ) : (
            <div className="description_character">
              <div className="card_character_image">
                <div className="card_character_photo_container">
                  <img
                    className="card_character_photo"
                    src={image}
                    alt="Personaje"
                  ></img>
                  <Favorite id={parseInt(getIdFromUrl())} />
                </div>
              </div>
              <div className="card_character_info">
                <span className="span_info">Nombre: {name}</span>
                <span className="span_info">Genero: {gender}</span>
                <span className="span_info">
                  Ultima Ubicación: {location.name}
                </span>
                <span className="span_info">
                  Lugar de Origen: {origin.name}
                </span>
                <span className="span_info">Especie: {species}</span>
                <span className="span_info">Estado: {status}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

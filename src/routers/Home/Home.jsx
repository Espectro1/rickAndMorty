import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Pagination } from "../../components/Pagination";
import { useHome } from "./useHome";
import "./home.css";

export const Home = () => {
  const {
    characters,
    filters,
    filterCharecters,
    onClickPrev,
    onClickNext,
    onSearchChange,
    onClickSearch,
  } = useHome();

  const Lupa = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 18a7 7 0 1 1 5.152-2.262l3.555 3.555a1 1 0 0 1-1.414 1.414l-3.699-3.699c-1.05.63-2.28.992-3.594.992zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
          fill="#191F23"
        />
      </svg>
    );
  };

  return (
    <>
      <div className="main_container">
        <div className="main_filters">
          <div className="filters_container">
            <div className="title_filter">Busqueda Filtrada</div>
            <Input
              value={filters.name}
              onChange={onSearchChange}
              name={"name"}
              label={"Nombre:"}
            />
            <Input
              value={filters.status}
              onChange={onSearchChange}
              name={"status"}
              label={"Estatus:"}
            />
            <Input
              value={filters.gender}
              onChange={onSearchChange}
              name={"gender"}
              label={"Genero:"}
            />
            <Input
              value={filters.species}
              onChange={onSearchChange}
              name={"species"}
              label={"Especie:"}
            />

            <button className="btn" onClick={onClickSearch}>
              <span>Buscar</span>
              <div className="lupa">{Lupa()}</div>
            </button>
          </div>
        </div>

        <Pagination onClickPrev={onClickPrev} onClickNext={onClickNext} />
        <div>
          <div className="character_container_info">
            <div className={`${characters ? "grid_container" : "notFound"}`}>
              {characters ? (
                filterCharecters().map(
                  ({ id, image, name, status, species }, i) => {
                    return (
                      <Card
                        id={id}
                        imageUrl={image}
                        name={name}
                        status={status}
                        species={species}
                        key={i}
                      />
                    );
                  }
                )
              ) : (
                <div className="notFound_message">
                  No encontramos alguna concidencia con tu busqueda, prueba
                  intentando otros valores D:
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

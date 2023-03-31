import { useEffect, useState } from "react";

export const useHome = () => {
  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    name: "",
    gender: "",
    status: "",
    species: "",
  });

  const baseApi = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(baseApi)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
      });
  }, []);

  const updatePage = (newPageUrl) => {
    fetch(newPageUrl)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
      });
  };

  const filterCharecters = () => {
    return characters.slice(currentPage, currentPage + 10);
  };

  const onClickPrev = () => {
    if (currentPage === 0 && info.prev) {
      updatePage(info.prev);
      setCurrentPage(10);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 10);
    }
  };

  const onClickNext = () => {
    if (currentPage + 10 < characters.length) {
      setCurrentPage(currentPage + 10);
    } else if (info.next) {
      setCurrentPage(0);
      updatePage(info.next);
    }
  };

  const onSearchChange = ({ target }) => {
    if (currentPage !== 0) setCurrentPage(0);

    switch (target.name) {
      case "name":
        setFilters((prevState) => ({ ...prevState, name: target.value }));
        break;
      case "status":
        setFilters((prevState) => ({ ...prevState, status: target.value }));
        break;
      case "gender":
        setFilters((prevState) => ({ ...prevState, gender: target.value }));
        break;
      case "species":
        setFilters((prevState) => ({ ...prevState, species: target.value }));
        break;

      default:
        break;
    }
  };

  const onClickSearch = () => {
    let queryString = getFiltersInQueryParams();

    if (queryString) {
      updatePage(`${baseApi}/${queryString}`);
    } else if (
      !(filters.name && filters.gender && filters.species && filters.status)
    ) {
      updatePage(`${baseApi}`);
    }
  };

  const getFiltersInQueryParams = () => {
    let claves = Object.keys(filters);
    let values = Object.values(filters);
    let queryString = "";
    let isHasQuestionMark = false;

    for (let i = 0; i < values.length; i++) {
      if (values[i]) {
        if (!isHasQuestionMark) queryString = "?";
        queryString =
          queryString +
          `${i === values.length ? values[i] : `&${claves[i]}=${values[i]}`}`;
        isHasQuestionMark = true;
      }
    }

    return queryString && queryString;
  };

  return {
    characters,
    filters,
    filterCharecters,
    onClickPrev,
    onClickNext,
    onSearchChange,
    onClickSearch,
  };
};

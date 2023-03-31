import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const useCharacters = () => {
  const [{ image, name, gender, location, origin, species, status }, setInfo] =
    useState({
      image: "",
      name: "",
      gender: "",
      location: { name: "" },
      origin: { name: "" },
      species: "",
      status: "",
    });

  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isError, setIsError] = useState(false);

  const locationPath = useLocation();
  const baseApi = "https://rickandmortyapi.com/api/character/";

  const getIdFromUrl = useCallback(() => {
    let id = locationPath.pathname
      ? locationPath.pathname.split("characters/")[1]
      : "1";
    if (!id) {
      id = "1";
    }
    return id;
  }, [locationPath.pathname]);

  useEffect(() => {
    const id = getIdFromUrl();
    setIsLoading(true);
    setIsNotFound(false);
    setIsError(false);

    fetch(baseApi + id)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setIsNotFound(true);
        } else {
          setInfo(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [getIdFromUrl, baseApi]);

  return {
    image,
    name,
    gender,
    location,
    origin,
    species,
    status,
    isNotFound,
    getIdFromUrl,
    isLoading,
    isError,
  };
};

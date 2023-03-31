import { useEffect, useState } from "react";

export const useFavorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const idFromLocalStorage = JSON.parse(localStorage.getItem("favorites"));
    if (idFromLocalStorage && idFromLocalStorage.includes(id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [id]);

  const onClickFavorite = () => {
    let ids = JSON.parse(localStorage.getItem("favorites"));
    if (ids) {
      if (ids.includes(id)) {
        ids = ids.filter((idStorage) => idStorage !== id);
        console.log("ola", ids);
      } else {
        ids.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(ids));
    } else {
      localStorage.setItem("favorites", JSON.stringify([id]));
    }
  };

  return { isFavorite, setIsFavorite, onClickFavorite };
};

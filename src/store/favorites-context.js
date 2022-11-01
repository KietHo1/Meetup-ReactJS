import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  return (
    <FavoritesContext.Provider>{props.children}</FavoritesContext.Provider>
  );
}

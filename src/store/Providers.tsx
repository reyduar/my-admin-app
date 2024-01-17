"use client";

import { Provider } from "react-redux";
import { store } from "./";
import { setFavoritesMovies } from "../store/movies/favoriteSlice";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-movies") || "{}"
    );
    console.log(favorites);
    store.dispatch(setFavoritesMovies(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

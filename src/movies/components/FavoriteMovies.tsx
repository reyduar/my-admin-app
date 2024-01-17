"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { MoviesGrid } from ".";
import { IoHeartOutline } from "react-icons/io5";

export const FavoriteMovies = () => {
  const favoriteMovies = useAppSelector((state) =>
    Object.values(state.favorite)
  );
  const [movies, setMovies] = useState(favoriteMovies);

  useEffect(() => {
    setMovies(favoriteMovies);
  }, [favoriteMovies]);

  return (
    <div>
      {movies.length > 0 ? <MoviesGrid movies={movies} /> : <NoFavorites />}
    </div>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-9xl text-gray-300" />
      <span className="text-2xl text-gray-300">No Favorites</span>
    </div>
  );
};

import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localstorageMiddleware = (state: MiddlewareAPI) => {
  return (next: any) => (action: any) => {
    next(action);
    if (action.type === "favorite/toggleFavorite") {
      const { favorite } = state.getState() as RootState;
      localStorage.setItem("favorite-movies", JSON.stringify(favorite));
      return;
    }

    // const result = next(action);
    // const favoriteMovies = state.getState().favorite;
    // localStorage.setItem("favorite", JSON.stringify(favoriteMovies));
    // return result;
  };
};

import { SimpleMovie } from "@/movies/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
    favorites: {
      '1': {id:1, title: 'movie1', poster: 'https://image.tmdb.org/t/p/w500/6OiNSLcRKJsBLXwb6DEi6IQ0JFk.jpg'},
      '2': {id:2, title: 'movie2', poster: 'https://image.tmdb.org/t/p/w500/6OiNSLcRKJsBLXwb6DEi6IQ0JFk.jpg'},
    }

*/

interface FavoriteState {
  favorites: { [key: string]: SimpleMovie };
}

// const getInitialState = (): FavoriteState => {
//   if (typeof localStorage === "undefined") return {};
//   const favorite = localStorage.getItem("favorite-movies");
//   if (!favorite) return {};
//   return JSON.parse(favorite);
// };

const initialState: FavoriteState = {
  favorites: {},
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavoritesMovies(
      state,
      action: PayloadAction<{ [key: string]: SimpleMovie }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimpleMovie>) {
      const { id, title, poster } = action.payload;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = { id, title, poster };
    },
  },
});

export const { setFavoritesMovies, toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

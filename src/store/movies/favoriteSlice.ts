import { SimpleMovie } from "@/movies/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
    '1': {id:1, title: 'movie1', poster: 'https://image.tmdb.org/t/p/w500/6OiNSLcRKJsBLXwb6DEi6IQ0JFk.jpg'},
    '2': {id:2, title: 'movie2', poster: 'https://image.tmdb.org/t/p/w500/6OiNSLcRKJsBLXwb6DEi6IQ0JFk.jpg'},

*/

interface FavoriteState {
  [key: string]: SimpleMovie;
}

const initialState: FavoriteState = {};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimpleMovie>) {
      const { id, title, poster } = action.payload;
      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = { id, title, poster };
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

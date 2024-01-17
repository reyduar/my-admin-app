import { FavoriteMovies, MoviesGrid } from "@/movies/components";
import { MoviesReponse, SimpleMovie } from "@/movies/interfaces";

export const metadata = {
  title: "Favorites",
  description: "Search movies",
};

const getMovies = async (page = 1, query = "Bat"): Promise<SimpleMovie[]> => {
  const data: MoviesReponse = await fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=true&api_key=de6715f3b6983b1e06ae712ebf052970&language=en-US&page=${page}&query=${query}`
  ).then((res) => res.json());

  let movies: SimpleMovie[] = [];

  movies = data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
  }));

  return movies;
};

export default async function FavoritesPages() {
  const movies = await getMovies(1);
  return (
    <>
      <div className="flex flex-col">
        <span className="text-5xl my-2">
          Favites Movies <small className="text-blue-500">Global State</small>
        </span>
        <FavoriteMovies />
      </div>

      <div className="flex flex-col">
        <span className="text-5xl my-2">
          List of Movies{" "}
          <small className="text-blue-500">Static Generation</small>
        </span>
        <MoviesGrid movies={movies} />
      </div>
    </>
  );
}

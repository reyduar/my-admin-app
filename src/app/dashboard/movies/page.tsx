import { MoviesGrid } from "@/app/movies/components";
import { MoviesReponse, SimpleMovie } from "@/app/movies/interfaces";

const getMovies = async (page = 1): Promise<SimpleMovie[]> => {
  const data: MoviesReponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=de6715f3b6983b1e06ae712ebf052970&language=en-US&include_adult=true&page=${page}`
  ).then((res) => res.json());
  console.log(data);

  let movies: SimpleMovie[] = [];

  movies = data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
  }));

  return movies;
};

export default async function MoviesPages() {
  const movies = await getMovies(1);
  return (
    <div className="flex flex-col">
      <MoviesGrid movies={movies}></MoviesGrid>
    </div>
  );
}

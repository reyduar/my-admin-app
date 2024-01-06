import { MoviesReponse, SimpleMovie } from "@/app/movies";
import Image from "next/image";

const getMovies = async (page = 1): Promise<SimpleMovie[]> => {
  const data: MoviesReponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=de6715f3b6983b1e06ae712ebf052970&language=es-MX&include_adult=true&page=${page}`
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
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li
            className="flex flex-wrap gap-10 items-center justify-center"
            key={movie.id}
          >
            <Image
              width={100}
              height={100}
              src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
              alt={movie.title}
            />
            <span>{movie.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { SimpleMovie } from "@/movies/interfaces";
import { MovieCard } from "./MovieCard";

interface Props {
  movies: SimpleMovie[];
}

export const MoviesGrid = ({ movies }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

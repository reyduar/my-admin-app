import { SimpleMovie } from "@/app/movies/interfaces";
import { MovieCard } from "./MovieCard";

interface Props {
  movies: SimpleMovie[];
}

export const MoviesGrid = ({ movies }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {movies.map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
    </div>
  );
};

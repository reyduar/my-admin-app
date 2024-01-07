import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";
import { SimpleMovie } from "../interfaces";

interface Props {
  movie: SimpleMovie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={movie.id}
            width={100}
            height={100}
            src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
            alt={movie.title}
            priority={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {movie.title}
          </p>
          <div className="mt-5">
            <Link
              href={`dashboard/movie/${movie.id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

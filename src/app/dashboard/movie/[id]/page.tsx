import { MovieResponse } from "@/movies/interfaces";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

// Crear metadata dinamica para cada id de pelicula

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = params;
    const { title, overview } = await getMovie(id);
    return {
      title: title,
      description: overview,
    };
  } catch (error) {
    return {
      title: "Movie not found",
      description: "Movie not found",
    };
  }
}

//! Crear rutas estaticas para cada id de pelicula en build time
export async function generateStaticParams() {
  const static150movies = Array.from(
    { length: 150 },
    (_, i) => `${500 + i + 1}`
  );
  return static150movies.map((id) => ({ params: { id } }));
  //  return [
  //   {id: "550"},
  //   {id: "551"},
  //   {id: "552"},
  //   {id: "553"},
  //   {id: "554"},
  //   {id: "555"},
  //   {id: "556"},
  //  ]
}

const getMovie = async (id: string): Promise<MovieResponse> => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=de6715f3b6983b1e06ae712ebf052970&language=en-US&include_adult=true`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24 * 30, // 30 days por el force-cache
        },
      }
    ).then((res) => res.json());

    console.log(`Se cargo a ${data.title}`);

    if (data.status_code === 34) notFound();

    return data;
  } catch (error) {
    notFound();
  }
};

export default async function MoviePage({ params }: Props) {
  const { id } = params;

  const movie = await getMovie(id);
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{movie.id} {movie.title}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={400}
              height={400}
              alt={`Imagen del pokemon ${movie.title}`}
              className="mb-5"
            />

            {movie.genres && (
              <div className="flex flex-wrap">
                {movie.genres.map((gen) => (
                  <p key={gen.id} className="mr-2 capitalize">
                    {gen.name}
                  </p>
                ))}
              </div>
            )}
            <div className="flex flex-wrap">{movie.overview}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Popularidad</p>
            <span className="text-base font-medium text-navy-700 flex">
              {movie.popularity}
            </span>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Votos</p>
            <span className="text-base font-medium text-navy-700 flex">
              {movie.vote_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

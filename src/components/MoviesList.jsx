import { useMoviesContext } from "../utils/context";
import Error from "./Error";
import Loading from "./Loading";
import Movie from "./Movie";

const MoviesList = () => {
  const { isLoading, movies, loadingError } = useMoviesContext();
  if (isLoading) {
    return <Loading />;
  }
  if (loadingError) {
    return <Error />;
  }
  return (
    <section className="px-4 py-10 flex flex-wrap gap-8 md:gap-12 justify-center">
      {movies.map((movie) => {
        return (
          <article key={movie.imdbID} className="w-64">
            <Movie {...movie} />
          </article>
        );
      })}
    </section>
  );
};
export default MoviesList;

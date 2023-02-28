import { Link, useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SingleMovie from "../components/SingleMovie";
import useFetch from "../utils/useFetch";

const MoviePage = () => {
  const { id } = useParams();
  const movieVal = `i=${id}`;
  const [isLoading, isError, movies ,loadingError] = useFetch(movieVal);
  if (isLoading) {
    return <Loading />;
  }
  if (loadingError) {
    return <Error />;
  }

  return (
    <main className="bg-green-100">
      <div className="max-w-7xl mx-auto min-h-screen pt-10  pb-14 text-center">
        <Link to="/">
          <button className="px-2 py-2 m-4 bg-red-400 rounded-lg text-white">
            Go To Home
          </button>
        </Link>
        <SingleMovie movies={movies} />
      </div>
    </main>
  );
};
export default MoviePage;

import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="bg-green-100">
      <div className="max-w-7xl min-h-screen mx-auto px-6 pt-4 pb-8">
        <div className="text-center">
          <h2 className="font-mono text-2xl py-1 mb-3 px-4 bg-red-400 rounded-xl text-white inline-block">
            GetMovies
          </h2>
        </div>
        <SearchForm />
        <MoviesList />
      </div>
    </div>
  );
};
export default Home;

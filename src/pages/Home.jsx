import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <SearchForm />
      <MoviesList />
    </div>
  );
};
export default Home;

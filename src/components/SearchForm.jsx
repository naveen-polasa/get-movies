import { useMoviesContext } from "../utils/context";

const SearchForm = () => {
  const { searchVal, handleChange, isError } = useMoviesContext();
  return (
    <div className="text-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search For Movie..."
          className="border-2 border-red-300 rounded-md w-[77%] sm:w-[30rem] h-12 px-3 bg-red-50"
          value={searchVal}
          onChange={handleChange}
        />
      </form>
      {isError.status && (
        <p className="text-red-500 m-2 text-lg">{isError.msg}</p>
      )}
    </div>
  );
};
export default SearchForm;

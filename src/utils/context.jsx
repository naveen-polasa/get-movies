import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const MoviesContext = createContext();

const MovieContext = ({ children }) => {
  const [searchVal, setSearchVal] = useState("avengers");
  const val = `s=${searchVal}`
  const [isLoading, isError, movies] = useFetch(val);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchVal(e.target.value);
  };

  return (
    <MoviesContext.Provider
      value={{ searchVal, handleChange, isLoading, isError, movies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);

export default MovieContext;

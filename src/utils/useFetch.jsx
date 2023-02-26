import axios from "axios";
import { useEffect, useState } from "react";

const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;

const useFetch = (searchVal) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(`${url}${searchVal}`);
      if (data.Response === "True") {
        setIsError({ status: false, msg: "" });
        setMovies(data.Search || data);
      } else {
        setIsError({ status: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [searchVal]);

  return [isLoading, isError, movies];
};
export default useFetch;

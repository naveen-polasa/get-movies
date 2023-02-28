import { Link } from "react-router-dom";

const Movie = ({ Poster, Title, Year, imdbID }) => {
  return (
    <div className="text-center border-2 p-3 pb-1 border-red-400 rounded-xl bg-red-50">
      <img src={Poster} alt={Title} className="h-80 w-72" />
      <div className="h-36 flex flex-col justify-center">
        <h3 className="font-mono pt-2 pb-1">
        {Title.length > 44 ? `${Title.slice(0,44)}...` : Title}</h3>
        <h3 className="font-mono py-1">Release Year : {Year}</h3>
        <Link to={`Movie/${imdbID}`} className="flex">
          <button className="mx-auto mt-2 py-2 px-3 border rounded-lg bg-red-400 hover:scale-110 hover:bg-orange-400 duration-300 text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Movie;

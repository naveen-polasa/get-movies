import { Link } from "react-router-dom";

const   Movie = ({ Poster, Title, Year, imdbID }) => {
  return (
    <div className="text-center">
      <img src={Poster} alt={Title} />
      <h3 className="font-semibold p-1">{Title}</h3>
      <h3 className="font-semibold p-1">Release Year : {Year}</h3>
      <Link to={`Movie/${imdbID}`} className='flex'>
          <button className="mx-auto mt-2 p-2  border rounded-lg bg-red-400 hover:scale-105 hover:bg-orange-400 duration-300 text-white">
            Details
          </button>
      </Link>
    </div>
  );
};
export default Movie;

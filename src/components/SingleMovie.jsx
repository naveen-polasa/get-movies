
const SingleMovie = ({ movies }) => {
  const {
    Actors,
    Director,
    Poster,
    Title,
    BoxOffice,
    Plot,
    Released,
    Runtime,
    imdbRating,
  } = movies;
  return (
    <article className="max-w-7xl mx-auto p-6 flex flex-col gap-8 md:flex-row break-words w-[80%] justify-center items-center border-2 rounded-xl">
      <div>
        <img src={Poster} alt={Title} />
      </div>
      <div className="md:w-96 text-xl flex flex-col text-start gap-y-2">
        <h3>
          <span className="font-semibold"> Released Year : </span> {Released}
        </h3>
        <h3>
          <span className="font-semibold"> Director: </span>
          {Director}
        </h3>
        <h3>
          <span className="font-semibold"> Box Office Collections : </span>
          {BoxOffice}
        </h3>
        <h3>
          <span className="font-semibold">Total RunTime: </span> {Runtime}
        </h3>
        <h3>
          <span className="font-semibold">IMDB Rating : </span> {imdbRating}
        </h3>
        <h3>
          <span className="font-semibold">Movie Plot : </span> {Plot}
        </h3>
        <h3>
          <span className="font-semibold"> Actors: </span>
          {Actors}
        </h3>
      </div>
    </article>
  );
};
export default SingleMovie;

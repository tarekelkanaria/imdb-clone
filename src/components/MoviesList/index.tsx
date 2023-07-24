import MovieCard from "./MovieCard";
import { MovieType } from "../../app/types/movie";

const MoviesList: React.FC<{ movies: MovieType[] }> = ({ movies }) => {
  return (
    <section className="container sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4">
      {movies.map((movie: MovieType) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
};

export default MoviesList;

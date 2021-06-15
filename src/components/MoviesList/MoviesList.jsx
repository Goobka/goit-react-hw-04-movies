import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import routes from '../../routes';

const MoviesList = ({ movies, location}) => {
  const url = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ul>{movies.map(({id, ...movieInfo}) => (  <li key={id}>
          <Link
            className="movie-list__link"
            to={{
              pathname: `${routes.movies}/${id}`,
              state: {
                from: location,
              },
            }}
      >
        <MovieCard movieInfo={movieInfo} />
      </Link>
    </li>
    ))}
    </ul>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default withRouter(MoviesList);
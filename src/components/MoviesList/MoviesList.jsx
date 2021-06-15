import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import routes from '../../routes';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location}) => {
  return (
    <ul className={styles.movies}>{movies.map(({id, ...movieInfo}) => (  <li key={id} className={styles.movies__item}>
          <Link
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
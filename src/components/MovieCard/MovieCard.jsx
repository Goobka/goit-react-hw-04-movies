import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';
import formatData from '../../services/formatData';

const MovieCard = ({movieInfo}) => {
  const { imgUrl, title, release_year } = formatData(movieInfo);

  return (
    <div>
      <div className={styles.movie__thumb}>
        <img className="movie__img" src={imgUrl} alt="movie poster" />
      </div>
      <p className={styles.movie__text}>{`${title}, ${release_year}`}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};

export default MovieCard;
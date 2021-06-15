import CastItem from '../CastItem';
import PropTypes from 'prop-types';

const MovieCast = ({ movieCast }) => {
  movieCast.map(({...actorInfo}) => console.log(actorInfo))
  return (
    <ul className="cast-list">
      {movieCast.map(({ id, ...actorInfo }) => (
        <CastItem key={id} actor={actorInfo} />
      ))}
    </ul>
  );
};

MovieCast.propTypes = {
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieCast;
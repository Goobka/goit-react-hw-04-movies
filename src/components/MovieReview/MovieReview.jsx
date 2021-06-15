import PropTypes from 'prop-types';

import ReviewItem from '../ReviewItem';

const MovieReview = ({movieReview}) => {
  return (
    <ul className="review">
      {movieReview.map(({ id, ...reviewInfo }) => (
        <ReviewItem key={id} reviewInfo={reviewInfo} />
      ))}
    </ul>
  );
};

MovieReview.propTypes = {
  movieReview: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieReview;
import PropTypes from 'prop-types';

//import formatingData from '../../servises/formatinData';

const MovieCard = ({movieInfo}) => {
  //const { imgUrl, title, realese_year } = formatingData(movieInfo);

  return (
    <div className="movie">
      <div className="movie__thumb">
        <img className="movie__img" src={movieInfo.imgUrl} alt="movie poster" />
      </div>
      <p className="movie__text">{`${movieInfo.title}, ${movieInfo.release_data}`}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};

export default MovieCard;
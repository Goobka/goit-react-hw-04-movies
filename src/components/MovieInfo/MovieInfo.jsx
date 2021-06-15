import { Link, withRouter } from 'react-router-dom';

const MovieInfo = ({ movie, match, location, url }) => {
  const locationFrom = location.state.from;

  return (
            <div className="movie-info">
      <div className="movie-info__box">
        <img className="movie-info__image" src={url+movie.poster_path} alt={movie.title} />
        <div className="movie-info__text">
          <h2 className="movie-info__title">
            {movie.title + ' (' + movie.release_date + ')'}
          </h2>
          <p className="movie-info__overview">
            <span className="movie-info__paragraph">Overview: </span>
            {movie.overview}
          </p>
          <p className="movie-info__vote ">
            <span className="movie-info__paragraph">User score: </span>
            {movie.vote_average}
          </p>
          <p className="movie-info__genres">
            <span className="movie-info__paragraf">Genres: </span>
            {movie.genres.map(elem => elem.name).join(', ')}
          </p>
          </div>
        </div>
      <ul className="addInfo">
        <li className="addInfo__item" key="cast">
          <Link
            className="addInfo__link"
            to={{
              pathname: `${match.url}/cast`,
              state: { from: locationFrom },
            }}
          >
            Cast
          </Link>
        </li>
        {movie.reviews?.results.length !== 0 ? (
          <li className="addInfo__item" key="reviews">
            <Link
              className="addInfo__link"
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: locationFrom },
              }}
            >
              Reviews
            </Link>
          </li>
        ) : (
          <p className="movie-info__message">
            There are no reviews for this movie!
          </p>
        )}
      </ul>
    </div>
  )
}

export default withRouter(MovieInfo);
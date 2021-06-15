import { Link, withRouter } from 'react-router-dom';
import styles from './MovieInfo.module.css';
import formatData from '../../services/formatData';

const MovieInfo = ({ movie, match, location }) => {
  const locationFrom = location.state.from;

  const dataUpdate = formatData(movie);
  const {
    title,
    imgUrl,
    overview,
    score,
    release_year,
    genresList,
    reviews,
  } = dataUpdate;

  const isReview = reviews?.results.length !== 0 ? true : false;

  return (
    <div className={styles.info}>
      <div className={styles.info__box}>
        <img src={imgUrl} alt={title} />
        <div className={styles.info__text}>
          <h2 className={styles.info__title}>
            {title + ' (' + release_year + ')'}
          </h2>
          <p className={styles.info__overview}>
            <span>Overview: </span>
            {overview}
          </p>
          <p className={styles.info__vote}>
            <span>User score: </span>
            {score}
          </p>
          <p className={styles.info__genres}>
            <span>Genres: </span>
            {genresList}
          </p>
          </div>
        </div>
      <ul className={styles.about}>
        <li className={styles.about__item} key="cast">
          <Link
            className={styles.about__link}
            to={{
              pathname: `${match.url}/cast`,
              state: { from: locationFrom },
            }}
          >
            Cast
          </Link>
        </li>
        {isReview ? (
          <li className={styles.about__item} key="reviews">
            <Link
              className={styles.about__link}
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: locationFrom },
              }}
            >
              Reviews
            </Link>
          </li>
        ) : (
          <p className={styles.about__msg}>
            There are no reviews for this movie!
          </p>
        )}
      </ul>
    </div>
  )
}

export default withRouter(MovieInfo);
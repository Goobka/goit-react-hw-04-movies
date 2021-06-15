import { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../components/Container';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import fetchMovies from '../services/fetchMovies';
import routes from '../routes';

const MovieCast = lazy(() =>
  import('../components/MovieCast' /* webpackChunkName: "cast" */),
);
const MovieReview = lazy(() =>
  import('../components/MovieReview' /* webpackChunkName: "reviews" */),
);

class MovieDetailsView extends Component {
  state = {
    base_url: 'https://image.tmdb.org/t/p/w500/',
    movie: {},
  };

  async componentDidMount() {
    const response = await fetchMovies.requestMovieDetails(this.props.match.params.movieId);
    this.setState({ movie: { ...response } });
  }

  onClickButton = event => {
    event.preventDefault();
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    return (
      <main>
        {this.state.movie.id && (
          <Container>
            <button
              type="button"
              className="button-back"
              onClick={this.onClickButton}
            >
              Back
            </button>
            <MovieInfo movie={this.state.movie} />
            <Suspense fallback={<></>}>
              <Switch>
                <Route
                  path={`${this.props.match.path}/cast`}
                  render={props => {
                    return <MovieCast movieCast={this.state.movie.credits.cast} />;
                  }}
                />
                ;
                <Route
                  path={`${this.props.match.path}/reviews`}
                  render={props => {
                    return <MovieReview movieReview={this.state.movie.reviews.results} />;
                  }}
                />
                ;
              </Switch>
            </Suspense>
          </Container>
        )}
      </main>
    )
  }
}

export default MovieDetailsView;
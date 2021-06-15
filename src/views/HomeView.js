import { Component } from 'react';
import Container from '../components/Container';
import MoviesList from '../components/MoviesList';
import fetchMovies from '../services/fetchMovies';

class HomeView extends Component {
  state = {
    movies: null,
  };

  async componentDidMount() {
    const response = await fetchMovies.requestTrendMovies();
    console.log(response.results);
    this.setState({ movies: response.results });
  }

  render() {
    return (
      <main>
        <Container>
          <h1 className="view-title">Trending today</h1>
          {this.state.movies && <MoviesList movies={this.state.movies} />}
        </Container>
      </main>
    )
  }
}

export default HomeView;
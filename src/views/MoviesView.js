import { Component } from 'react';
import Container from '../components/Container';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import fetchMovies from '../services/fetchMovies';

class MoviesView extends Component {
  state = {
    movies: null,
    searchQuery: '',
  }

  componentDidMount() {
    if (this.props.location.search !== '') {
      let paramsSearch = new URLSearchParams(this.props.location.search).get(
        'query',
      );
      this.setState({ searchQuery: paramsSearch });
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const response = await fetchMovies.requestSearchMovie(
        this.state.searchQuery,
      );

      this.setState({ movies: response.results });
    }
  }


  onChangeQuery = (query) => {
    const { history, location } = this.props;
    this.setState({
      searchQuery: query,
    });
    history.push({
      ...location,
      search: `query=${query}`,
    });
  }

  render() {
    return (
      <main>
        <Container>
          <Searchbar onSubmit={this.onChangeQuery} />
          {this.state.movies && <MoviesList movies={this.state.movies} />}
        </Container>
      </main>
    )
  }
}

export default MoviesView;
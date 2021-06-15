import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView' /* webpackChunkName: "movies-info-view" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "movies-view" */),
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.movieDetails} component={MovieDetailsView} />
          <Route path={routes.movies} component={MoviesView} />
          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

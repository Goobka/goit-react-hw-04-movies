import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink exact to={{ pathname: `${routes.home}` }}
          className="nav__link"
          activeClassName="nav__link--active">
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink exact to={{ pathname: `${routes.movies}` }}
          className="nav__link"
          activeClassName="nav__link--active">
          Movies
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;
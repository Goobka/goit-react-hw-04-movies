import PropTypes from 'prop-types';

import defaultImg from '../../images/no-img.jpeg';
const baseUrl = 'https://image.tmdb.org/t/p/w342';

const CastItem = ({ actor: { profile_path, name, character } }) => {
  const img = profile_path ? baseUrl + profile_path : defaultImg;
  return (
    <li className="cast-list__item">
      <div className="cast-list__box">
        <img className="cast-list__img" src={img} alt={name} />
      </div>
      <div className="cast-list__box-text">
        <h2 className="cast-list__title">{name}</h2>
        <p className="cast-list__text">character: {character}</p>
      </div>
    </li>
  );
};

CastItem.defaultProps = {
  profile_path: null,
  name: '',
  character: '',
};

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default CastItem;
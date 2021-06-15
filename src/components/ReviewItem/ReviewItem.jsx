import PropTypes from 'prop-types';

import defaultImg from '../../images/no-img.jpeg';
const baseUrl = 'https://image.tmdb.org/t/p/w342';

const ReviewItem = ({ reviewInfo: { author_details, author, content } }) => {
  const avatar = author_details.avatar_path;

  const img = !avatar
    ? defaultImg
    : avatar.slice(1, 6) === 'https'
    ? avatar.slice(1)
    : baseUrl + avatar;

  return (
    <li className="review-list__item">
      <div className="review-list__box">
        <img className="review-list__img" src={img} alt="author avatar" />
      </div>
      <div className="review-list__box-text">
        <h2 className="review-list__title">{author}</h2>
        <p className="review-list__context">{content}</p>
      </div>
    </li>
  );
};

ReviewItem.defaultProps = {
  author: '',
  content: '',
  avatar_path: '',
};

ReviewItem.propTypes = {
  author_detail: PropTypes.objectOf(
    PropTypes.shape({
      avatar_path: PropTypes.string,
    }),
  ),
};

export default ReviewItem;
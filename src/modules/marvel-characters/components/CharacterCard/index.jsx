import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  isSkeleton: PropTypes.bool,
  fecha: PropTypes.int
};
 
export default function CharacterCard({ image, name, isSkeleton, fecha }) {
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body">
        <h4 className="u-no-margin">{name}</h4>
        <h4 className="u-no-margin">{fecha}</h4>
      </div>
    </div>
  );
}

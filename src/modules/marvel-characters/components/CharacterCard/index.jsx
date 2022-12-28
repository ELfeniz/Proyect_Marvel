import './styles.scss';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';   // para navegar con id de los comics

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  isSkeleton: PropTypes.bool,
  description: PropTypes.string,
  id: PropTypes.number
};

export default function CharacterCard({ image, name, isSkeleton, description, id }) {
  let navigate = useNavigate();
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton} onClick={()=>navigate(`/${id}`)}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body">
        <h5 className="u-no-margin">{name}</h5>
        <span className="u-no-margin2">{description}</span>
      </div>
    </div>
  );
}

import './styles.scss';
import { Link } from 'react-router-dom';


export default function Experiencia_u() {
  return (
<section className="marvel-insider">
      <div className="contenedor">
        <div className="imagen">
          <img className="imagen_f" src="/images/avanger_1.jpg"></img>
        </div>
        <div className="contenedor-main">
          <div className="promo__eyebrow">Marvel Insider</div>
          <div className="promo__title">Watch, Earn, Redeem!</div>
          <div className="promo__description">
            Get rewarded for doing what you already do as a fan.
          </div>
          <div>
            <Link to="/join">
              <button className='button'>JOIN NOW</button>
            </Link>
          </div>
          <div className="promo__legal">Terms and Conditions Apply.</div>
        </div>
      </div>
    </section>
  );
}

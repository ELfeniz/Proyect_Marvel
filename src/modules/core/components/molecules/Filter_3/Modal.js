import './style.scss';
import PropTypes from 'prop-types';
import { useState }  from 'react';

Modal.propTypes = {
    estado: PropTypes.bool,
    closeModal: PropTypes.object
};
function Modal  ({ estado, closeModal })  {

  const [estado1, setestado1] = useState(false); 
  
  const cambio = () =>{
    if(estado1 == true){
      setestado1(false);
    }else{
      setestado1(true);
    }
  }
    return (
      <div className="principal2">
        <div className={`modal ${estado && 'modal-open'}`}>
          <ul className="list-items">
            <li className="item" onClick={closeModal}>
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Capitan America</span>
            </li>
            <li className="item" onClick={cambio}>
              <span className="checkbox">
                <i className={`fa fa-check check-icon ${estado1 && 'check-icon-open'}`}></i>
              </span>
              <span className="item-text">Los Vengadores</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
            <li className="item">
              <span className="checkbox">
                <i className="fa fa-check check-icon"></i>
              </span>
              <span className="item-text">Bruja Escarlata</span>
            </li>
          </ul>
        </div>

        <div className={`list-botones ${estado && 'list-botones-open'}`}>
          <button className="boton_cancel" onClick={closeModal}>
            CANCEL
          </button>
          <button className="boton_reset">RESET</button>
          <button className="boton_aply">APPLY</button>
        </div>
      </div>
    );

}

export default Modal;
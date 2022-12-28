import './style.scss';
import { useState }  from 'react';   // Hooks paquete, para ver los estados
import Modal from "./Modal"
import { AiFillCaretDown } from "react-icons/ai";

import PropTypes from 'prop-types';

Filter_3.propTypes = {
  cambio_modal: PropTypes.func,
  cambio_textmodal: PropTypes.func
};

export default function Filter_3({ cambio_modal, cambio_textmodal }) {

  const [estado, setestado] = useState(false); 
  // useState, va hacer el estado inicial

  const openModal = () =>{
    if(estado == true){
      setestado(false);
    }else{
      setestado(true);
    }
  }

  const closeModal = () =>{
    setestado(false);
  }

  return (
    <div className="containerf">
      <div className="selec-btn">
        <button className="btn_tv" onClick={openModal}>
          SERIES <AiFillCaretDown className={`icon1 ${estado && 'icon1-open'}`}/>
        </button>
      </div>
      <Modal estado={estado}
      closeModal={closeModal}
      cambio_modal={cambio_modal}
      cambio_textmodal={cambio_textmodal}
      />
    </div>
  );
}
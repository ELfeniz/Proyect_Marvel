import './style.scss';
import { useState }  from 'react';   // Hooks paquete, para ver los estados
import Modal from "./Modal"
import { AiFillCaretDown } from "react-icons/ai";

export default function Filter_3() {

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
        <button className="btn-text" onClick={openModal}>
          TV <AiFillCaretDown className={`icon1 ${estado && 'icon1-open'}`}/>
        </button>
      </div>
      <Modal estado={estado}
      closeModal={closeModal}
      />
    </div>
  );
}
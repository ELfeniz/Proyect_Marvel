import './style.scss';
import PropTypes from 'prop-types';
import { useState }  from 'react';

Modal.propTypes = {
    estado: PropTypes.bool,
    closeModal: PropTypes.func,
    cambio_modal: PropTypes.func,
    cambio_textmodal: PropTypes.func
};
function Modal  ({ estado, closeModal, cambio_modal, cambio_textmodal })  {

  const [estado1, setestado1] = useState(false); 
  const [estado2, setestado2] = useState(false); 
  const [estado3, setestado3] = useState(false); 
  const [estado4, setestado4] = useState(false); 
  const [estado5, setestado5] = useState(false); 
  const [estado6, setestado6] = useState(false); 
  const [estado7, setestado7] = useState(false); 
  const [estado8, setestado8] = useState(false); 
  const [estado9, setestado9] = useState(false); 
  const [estado10, setestado10] = useState(false); 
  
  const cambio = () =>{
    if(estado1 == true){
      setestado1(false);
    }else{
      setestado1(true);
    }
  }

  const cambio2 = () =>{
    if(estado2 == true){
      setestado2(false);
    }else{
      setestado2(true);
    }
  }

  const cambio3 = () =>{
    if(estado3 == true){
      setestado3(false);
    }else{
      setestado3(true);
    }
  }

  const cambio4 = () =>{
    if(estado4 == true){
      setestado4(false);
    }else{
      setestado4(true);
    }
  }

  const cambio5 = () =>{
    if(estado5 == true){
      setestado5(false);
    }else{
      setestado5(true);
    }
  }

  const cambio6 = () =>{
    if(estado6 == true){
      setestado6(false);
    }else{
      setestado6(true);
    }
  }

  const cambio7 = () =>{
    if(estado7 == true){
      setestado7(false);
    }else{
      setestado7(true);
    }
  }

  const cambio8 = () =>{
    if(estado8 == true){
      setestado8(false);
    }else{
      setestado8(true);
    }
  }

  const cambio9 = () =>{
    if(estado9 == true){
      setestado9(false);
    }else{
      setestado9(true);
    }
  }

  const cambio10 = () =>{
    if(estado10 == true){
      setestado10(false);
    }else{
      setestado10(true);
    }
  }

  const reset = () =>{
    setestado1(false);
    setestado2(false);
    setestado3(false);
    setestado4(false);
    setestado5(false);
    setestado6(false);
    setestado7(false);
    setestado8(false);
    setestado9(false);
    setestado10(false);
  }


  function aply () {
    let text2 = "";
    if(estado1 == true){
      console.log("Absolute Carnage (2019)")
      let str1 = "27272";
      text2 = text2.concat(',', str1)
    }
    if(estado2 == true){
      console.log("1602 (2003 - 2004)")
      let str2 = "489";
      text2 = text2.concat(',', str2)
    }
    if(estado3 == true){
      console.log("Force Works (2020)")
      let str3 = "29693";
      text2 = text2.concat(',', str3)
    }

    if(estado4 == true){
      console.log("Avengers (1998 - 2004)")
      let str4 = "354";
      text2 = text2.concat(',', str4)
    }
    if(estado5 == true){
      console.log("Avengers (2018 - Present)")
      let str5 = "24229";
      text2 = text2.concat(',', str5)
    }
    if(estado6 == true){
      console.log("Beta Ray Bill (2021)")
      let str6 = "31371";
      text2 = text2.concat(',', str6)
    }
    if(estado7 == true){
      console.log("All-Winners Comics (1941 - 1947)")
      let str7 = "2114";
      text2 = text2.concat(',', str7)
    }
    if(estado8 == true){
      console.log("Captain America: Who Will Wield  the Shield? (2009")
      let str8 = "9121";
      text2 = text2.concat(',', str8)
    }
    if(estado9 == true){
      console.log("Captain Marvel (2012 - 2013)")
      let str9 = "16280";
      text2 = text2.concat(',', str9)
    }
    if(estado10 == true){
      console.log("Cable & Deadpool Vol. 1: If Looks Could Kill (2007)")
      let str10 = "1209";
      text2 = text2.concat(',', str10)
    }

    if(text2.length > 0){
      console.log(text2)
      cambio_modal(true) 
      cambio_textmodal(text2)


    }else{
      console.log("no selecccionaste ni puta mierda")
      cambio_modal(false)
      cambio_textmodal(text2)
    }

  }  

    return (
      <div className="principal2">
        <div className={`modal ${estado && 'modal-open'}`}>
          <ul className="list-items">
            <li className="item" onClick={cambio}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon0 ${estado1 && 'check-icon-open0'}`}></i>
              </span>
              <span className="item-text">Absolute Carnage (2019)(2011)</span>
            </li>
            <li className="item" onClick={cambio2}>
              <span className="checkbox">
                <i className={`fa fa-check check-icon ${estado2 && 'check-icon-open'}`}></i>
              </span>
              <span className="item-text">1602 (2003 - 2004)</span>
            </li>
            <li className="item" onClick={cambio3}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado3 && 'check-icon-open1'}`}></i>
              </span>
              <span className="item-text">Force Works (2020)</span>
            </li>
            <li className="item" onClick={cambio4}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado4 && 'check-icon-open2'}`}></i>
              </span>
              <span className="item-text">Avengers (1998 - 2004)</span>
            </li>
            <li className="item" onClick={cambio5}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado5 && 'check-icon-open3'}`}></i>
              </span>
              <span className="item-text">Avengers (2018 - Present)</span>
            </li>
            <li className="item" onClick={cambio6}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado6 && 'check-icon-open4'}`}></i>
              </span>
              <span className="item-text">Beta Ray Bill (2021)</span>
            </li>
            <li className="item" onClick={cambio7}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado7 && 'check-icon-open5'}`}></i>
              </span>
              <span className="item-text">All-Winners Comics (1941 - 1947)</span>
            </li>
            <li className="item" onClick={cambio8}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado8 && 'check-icon-open6'}`}></i>
              </span>
              <span className="item-text">Captain America: Who Will Wield  the Shield? (2009)</span>
            </li>
            <li className="item" onClick={cambio9}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado9 && 'check-icon-open7'}`}></i>
              </span>
              <span className="item-text">Captain Marvel (2012 - 2013)</span>
            </li>
            <li className="item" onClick={cambio10}>
              <span className="checkbox">
              <i className={`fa fa-check check-icon1 ${estado10 && 'check-icon-open8'}`}></i>
              </span>
              <span className="item-text">Cable & Deadpool Vol. 1: If Looks Could Kill (2007)</span>
            </li>

          </ul>
        </div>

        <div className={`modal ${estado && 'list-botones-open'}`}>
          <button className="boton_cancel2" onClick={closeModal}>
            CANCEL
          </button>
          <button className="boton_reset2" onClick={reset} >RESET</button>
          <button className="boton_aply2" onClick={aply}>APPLY</button>
        </div>
      </div>
    );

}

export default Modal;
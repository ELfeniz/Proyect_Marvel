

import './style.scss';
import PropTypes from 'prop-types';
import { useState }  from 'react';

Modal.propTypes = {
    estado: PropTypes.bool,
    closeModal: PropTypes.object
};
function Modal  ({ estado, closeModal })  {

  const languageList = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'arabic', label: 'Arabic' },
  ];


  const [lang, setLang] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    
    
    if (checked) {
      // push selected value in list
      setLang((prev) => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setLang((prev) => prev.filter((x) => x !== value));
    }
  };  

  const reset = () =>{
    lang.forEach(element => {
    setLang((prev) => prev.filter((x) => x !== element));

    for (let i = 0; i < estado.current.length; i++) {

      estado.current[i].checked = false;
  }

    });
  }

    return (
      <div className="principal2">
        <div className={`modal ${estado && 'modal-openff'}`}>
        {languageList.map((x, i) => (
      <label key={i}>
        <input
          type="checkbox"
          name="lang"
          value={x.value}
          onChange={handleChange}
        />{' '}
        {x.label}
      </label>
    ))}

    <div> Selected languages: {lang.length ? lang.join(', ') : null}</div>

        </div>

        <div className={`modal ${estado && 'list-botones-openf'}`}>
          <button className="boton_cancel" onClick={closeModal}>
            CANCEL
          </button>
          <button className="boton_reset" onClick={ reset }>RESET</button>
          <button className="boton_aply">APPLY</button>
        </div>
      </div>
    );

}

export default Modal;
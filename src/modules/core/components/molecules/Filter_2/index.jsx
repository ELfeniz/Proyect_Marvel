import './style.scss';
import { FiChevronDown } from 'react-icons/fi';
import {useRef, useEffect} from 'react';

export default function Filter_2() {
  // useState, va hacer el estado inicial
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const selectBtn = document.querySelector('.select-btn');
    console.log(selectBtn);


  }, []);

  return (
    <div className="container">
      <div className="selec-btn">
        <span className="btn-text">Movies</span>
        <span className="arrow-dwn">
          <FiChevronDown className="icon1" />
        </span>
      </div>

      <ul className="list-items">
        <li className="item">
          <span className="checkbox">
            <i className="fa fa-check check-icon"></i>
          </span>
          <span className="item-text">Capitan America</span>
        </li>
        <li className="item">
          <span className="checkbox">
            <i className="fa fa-check check-icon"></i>
          </span>
          <span className="item-text">Los Vengadores</span>
        </li>
        <li className="item">
          <span className="checkbox">
            <i className="fa fa-check check-icon"></i>
          </span>
          <span className="item-text">Bruja Escarlata</span>
        </li>
      </ul>
    </div>
  );
}

  
import "./style2.scss"

import { useState, useEffect, useRef} from "react";


export default function Error_404() {


  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef();

  const eyeBrowLeft = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + 180;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

    eyeBrowLeft.current.style.transform = `translateY(${(event.clientY / 50) }px)`;
  };
  
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

return (
    <div className="error">
      <div className="container-2">
        <div className="row">
          <div className="col">
            <div className="text">
            <h2 className="n1">404 PAGE NOT FOUND</h2>
            <h6 className="n2">Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</h6>
            </div>
          </div>
          <div className="col">
            <img className="imagen_2f" src="https://i.annihil.us/u/prod/marvel/html_pages_assets/error-pages/prod/black-widow-char.e296fbe1.jpg"></img>
            <div className="eye" ref={eyeLeft} style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`,
          }}></div>
          </div>
        </div>

      </div>
    </div>
  );
}
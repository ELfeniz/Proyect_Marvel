import './style.scss';

import PropTypes from 'prop-types';

Autocomplet.propTypes = {
  text: PropTypes.string,
  cambio_text: PropTypes.func,
  cambio_text2: PropTypes.func,
  characters: PropTypes.array,
  autocomplet: PropTypes.bool

};

//(e) =>cambio_text(e.value.target)


export default function Autocomplet({ text, cambio_text, cambio_text2, characters, autocomplet }) {
//    const [estado2, setestado2] = useState(true);


function Busqueda(){
  //setestado2(true)

  if(text.length >= 3){

      if((characters.filter((item) => item.toLowerCase().includes(text.trim().toLowerCase()))).length > 0){
        if((characters.filter((item) => item.toLowerCase().includes(text.trim().toLowerCase()))).length < 3){
          return (
            <div className={`modal ${autocomplet && 'conten1-open2'}`}>
                 <ul className="list-items4">
                {characters.filter((item) =>
                item.toLowerCase().includes(text.trim().toLowerCase()))
                          .slice(0, 5)
                          .map((item) =>  <li className="item-3" key= {item} onClick={() => cambio_text2(`${item}`)}> 
                                                <span className="item-text">{item}</span>
                                        </li> )}
                </ul>
            </div>
  
              )
        }else{
          return (
            <div className={`modal ${autocomplet && 'conten1-open3'}`}>
                 <ul className="list-items4">
                {characters.filter((item) =>
                item.toLowerCase().includes(text.trim().toLowerCase()))
                          .slice(0, 5)
                          .map((item) =>  <li className="item-3" key= {item} onClick={() => cambio_text2(`${item}`)}> 
                                                <span className="item-text">{item}</span>
                                        </li> )}
                </ul>
            </div>
  
              )
        }
      }else{
        return (
        <div className={`conten1 ${autocomplet && 'conten1-open'}`}>
          <ul className="list-items3">
            <li className="item-3" onClick={() => cambio_text("NO MATCHES FOUND!")}>
              <span className="item-text">NO MATCHES FOUND!</span>
            </li>
          </ul>
        </div>
        )

      }
    }
  if(text.length < 3 && text.length > 0){
      console.log("prueba 3nnn")
      return (
          <div className={`conten1 ${autocomplet && 'conten1-open'}`}>
            <ul className="list-items3" >
              <li className="item-3"  onClick={() => cambio_text("KEEP TYPING...!")} >
                <span className="item-text">KEEP TYPING...</span>
              </li>
            </ul>
          </div>
          )
  }
}
  return (

        <Busqueda/>
        
  );
}

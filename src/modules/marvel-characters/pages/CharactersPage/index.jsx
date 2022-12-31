import './styles.scss';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import CharactersGrid2 from '@/modules/marvel-characters/components/CharacterGrid2';
import React, { useState, useEffect } from 'react';
import './styles.scss';
import { BsSearch } from 'react-icons/bs';

import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import Filter_3 from 'src/modules/core/components/molecules/Filter_3';
import Filter_2 from 'src/modules/core/components/molecules/Filter_2';

import Autocomplet from 'src/modules/marvel-characters/components/Autocomplet';



export function CharacterPage() {

  const [text, settext] = useState('');

  const [text2, setText2] = useState('');
  const [text3, setText3] = useState(false);

  const [autocomplet, setautocomplet] = useState(false); 

  // const [estado, setestado] = useState(true);

  const [characters, setCharacters] = useState([]);

  const [textmodal, settextmodal] = useState('');
  const [modal, setmodal] = useState(false);

  const cambio_modal = (a) =>{
    setmodal(a);
  }

  const cambio_textmodal = (a) =>{
    settextmodal(a);
  }

  console.log('aux3', text3);

  const [select, setselect] = useState('A-Z');

    useEffect(() => {
      Api();
    }, []); 
 
  async function Api() {
      const orden = {
        orderBy:"name"
      };
      const name = {
        nameStartsWith: text
      };

      var totaldat = ["Zzzax", "Zuras"];
      for (var i = 1; i <= 65; i++) {     //65
        const data = await getCharactersForGrid(i, 24, orden, name);
        for (var i2 = 0; i2 <= 23; i2++) {
          var data3 = data.results[i2].name;
          totaldat = totaldat.concat(data3);
        }
      }

      setCharacters(totaldat);

  }
  
  function Orden() {
    if (select == 'A-Z') {
      if(modal==false){
        console.log('si');
        if (text3 == true) {
          console.log(text3);
          console.log("te encontrre", text2);
          if (text2.length < 1) {
            return <CharactersGrid n={1} />;
          } else {
            return <CharactersGrid n={2} busqueda={text2} />;
          }
        }  
        if (text3 == false){
          if(text2.length<1){
            return <CharactersGrid n={1} busqueda={text2} />;
          }else{
            return <CharactersGrid n={2} busqueda={text2} />;
          }
        }
      }else{
        return <CharactersGrid n={3} busqueda={textmodal} />;
      }
    }
    if (select == 'Z-A') {
      if(modal==false){
        console.log('no');
        if (text3 == true) {
          console.log(text3);
          console.log(text2);
          if (text2.length < 1) {
            return <CharactersGrid2 n={1} />;
          } else {
            return <CharactersGrid2 n={2} busqueda={text2} />;
          }
        }  
        if (text3 == false){
          if(text2.length<1){
            return <CharactersGrid2 n={1} busqueda={text2} />;
          }else{
            return <CharactersGrid2 n={2} busqueda={text2} />;
          }
        }
      }else{
        return <CharactersGrid2 n={3} busqueda={textmodal} />;
      }
    }
    setText3(false);
  }

  // function Orden2(){
  //   if(text.length >= 3){
  //     setestado(true)
  //     if((characters.filter((item) => item.toLowerCase().includes(text.trim().toLowerCase()))).length > 0){

  //       return (
  //         <div className={`modal ${estado && 'modal-optionf'}`}>
  //             {characters.filter((item) =>
  //             item.toLowerCase().includes(text.trim().toLowerCase()))
  //                       .slice(0, 5)
  //                       .map((item) =>  <option className="option3"  key={item}>{item}</option> )}
  //         </div>
  //           )
  //     }else{
  //       return (
  //       <div className={`modal ${estado && 'modal-option2f'}`}>
  //         <ul className="list-items2">
  //           <li className="item" value={"KEEP TYPING..."} onClick={(e) => settext(e.target.value)}>
  //             <span className="item-text">NO MATCHES FOUND!</span>
  //           </li>
  //         </ul>
  //       </div>
  //       )

  //     }
  //   }
  // }

//   function Busqueda(){
//     //setestado2(true)
//     setautocomplet(true)
//     if(text.length >= 3){

//         if((characters.filter((item) => item.toLowerCase().includes(text.trim().toLowerCase()))).length > 0){
//           return (
//             <div className={`modal-2 ${autocomplet && 'modal-autoc'}`}>
//                  <ul className="list-items4">
//                 {characters.filter((item) =>
//                 item.toLowerCase().includes(text.trim().toLowerCase()))
//                           .slice(0, 5)
//                           .map((item) =>  <li className="item-3" key= {item} onClick={() => cambio_text2(`${item}`)}> 
//                                                 <span className="item-text">{item}</span>
//                                         </li> )}
//                 </ul>
//             </div>
//               )
//         }else{
//           return (
//           <div className={`conten1 ${autocomplet && 'conten1-open'}`}>
//             <ul className="list-items3">
//               <li className="item-3" onClick={() => cambio_text("NO MATCHES FOUND!")}>
//                 <span className="item-text">NO MATCHES FOUND!</span>
//               </li>
//             </ul>
//           </div>
//           )
  
//         }
//       }
//     if(text.length < 3 && text.length > 0){
//         console.log("prueba 3nnn")
//         return (
//             <div className={`conten1 ${autocomplet && 'conten1-open'}`}>
//               <ul className="list-items3" >
//                 <li className="item-3"  onClick={() => cambio_text("KEEP TYPING...!")} >
//                   <span className="item-text">KEEP TYPING...</span>
//                 </li>
//               </ul>
//             </div>
//             )
//     }
//  }


  function handleKeyDown(event) {
    if (event.key == 'Enter') {
      // 👇 Get input value
      console.log('enter');
      setText2(text);
      setText3(true);
      setmodal(false)
      console.log("text3 ff", text)
    }
  }

  const cambio_text = (a) =>{
    settext(a);
    setautocomplet(false)
  }

  const cambio_text2 = (a) =>{
    settext(a);
    setmodal(false)
    setText2(a);
    setautocomplet(false)
  }
  
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <div className="Container-Featured">
          <section className="Featured-Characters">
            <div className="Container-Card-Title">
              <h1 className="Title-featured-characters">FEATURED CHARACTERS</h1>
            </div>
            <div className="Container-Cards-grip-6">
              <div className="Cards-General-Characters">
                <div className="Card-img">
                  <img
                    className="Img-Cards"
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/107shr_ons_crd_03.jpg"></img>
                </div>
                <div className="Cards-Title-Characters">
                  <p className="Title-Featured-Character">SHURI</p>
                </div>
              </div>
              <div className="Cards-General-Characters">
                <div className="Card-img">
                  <img
                    className="Img-Cards"
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/124irh_ons_crd_01.jpg"></img>
                </div>
                <div className="Cards-Title-Characters">
                  <p className="Title-Featured-Character">RIRI WILLIANS</p>
                  <div className="Cards-Title-Characters-Secondary">
                    <p className="Cards-Title-Characters-Secondary-text">Ironheart</p>
                  </div>
                </div>
              </div>
              <div className="Cards-General-Characters">
                <div className="Card-img">
                  <img
                    className="Img-Cards"
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/276mbk_ons_crd_01.jpg"></img>
                </div>
                <div className="Cards-Title-Characters">
                  <p className="Title-Featured-Character">M&apos;BAKU</p>
                </div>
              </div>
              <div className="Cards-General-Characters">
                <div className="Card-img">
                  <img
                    className="Img-Cards"
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/110oky_ons_crd_04.jpg"></img>
                </div>
                <div className="Cards-Title-Characters">
                  <p className="Title-Featured-Character">OKOYE</p>
                </div>
              </div>
              <div className="Cards-General-Characters">
                <div className="Card-img">
                  <img
                    className="Img-Cards"
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/129nam_ons_crd_01.jpg"></img>
                </div>
                <div className="Cards-Title-Characters">
                  <p className="Title-Featured-Character">NAMOR</p>
                </div>
              </div>
              <div className="Cards-General-Characters">
                <div className="Card-img">
                  <img
                    className="Img-Cards"
                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/277qrm_ons_crd_01.jpg"></img>
                </div>
                <div className="Cards-Title-Characters">
                  <p className="Title-Featured-Character">QUEEN RAMONDA</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="mvl-section-card">
          <img src="/images/bruja_escarlata.jpg" className="bruja_escarlata" alt="logo_bruja" />
        </section>

        <h1 className="letra_p">MARVEL CHARACTERS LIST</h1>
        <select className="form-select2" value={select} onChange={(e) => setselect(e.target.value)}>
          <option selected>A-Z</option>
          <option>Z-A</option>
        </select>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contenerdor_search">
                <div className="linea">
                  <BsSearch className="icon" />
                  <input
                    type="text"
                    placeholder="SEARCH"
                    className="color_f"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onClick={() => setautocomplet(true)}
                    //list="suggestions"
                  />
                  {/* <Orden2/> */}
                </div>
              </div>
            </div>
            <div className="col">
            <div className="contenerdor_2">
              <Filter_2 />
              <Filter_3 cambio_modal={cambio_modal}
              cambio_textmodal={cambio_textmodal}/>
              
            </div>
          </div>
          {/* <Busqueda/> */}
          <Autocomplet text={text} cambio_text={cambio_text}
           cambio_text2={cambio_text2} characters={characters}
           autocomplet={autocomplet}/>
          </div>
        </div>
        <Orden/>
      </div>
    </div>
  );
}

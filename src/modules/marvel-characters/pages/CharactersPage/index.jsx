import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import CharactersGrid2 from '@/modules/marvel-characters/components/CharacterGrid2';
import React, { useState, useEffect } from 'react';
import './styles.scss';
import { BsSearch } from 'react-icons/bs';

import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import Filter_3 from 'src/modules/core/components/molecules/Filter_3';
import Filter_2 from 'src/modules/core/components/molecules/Filter_2';

export function CharacterPage() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState(false);

  const [estado, setestado] = useState(false);

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
      for (var i = 1; i <= 65; i++) {
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
          console.log(text2);
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
  }

  function Orden2(){
    setestado(true)
    if(text.length >= 3){
      if((characters.filter((item) => item.toLowerCase().includes(text.trim().toLowerCase()))).length > 0){

        return (
          <div className={`modal ${estado && 'modal-optionf'}`}>
              {characters.filter((item) =>
              item.toLowerCase().includes(text.trim().toLowerCase()))
                        .slice(0, 5)
                        .map((item) =>  <option className="option3" key={item}>{item}</option> )}
          </div>
            )
      }else{
        return (
        <div className={`modal ${estado && 'modal-option2f'}`}>
          <option className="option3"  >NO MATCHES FOUND!</option>  
        </div>
        )

      }
    }else{
    if(text.length < 3 && text.length > 0){
        return (
        <div className={`modal ${estado && 'modal-option2f'}`}>

            <option className="option3" >KEEP TYPING...</option>  

        </div>
        )

      }
    }
  }
  
  <select className="form-select2" value={select} onChange={(e) => setselect(e.target.value)}>
  <option selected>A-Z</option>
  <option>Z-A</option>
</select>


  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      // 👇 Get input value
      console.log('enter');
      setText2(text);
      setText3(true);
      setmodal(false)
    }else{
      setText3(false);
    }
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
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                    <Orden2/>
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
          </div>
        </div>
        <Orden/>
      </div>
    </div>
  );
}

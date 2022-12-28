import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export const Bibliografy = () => {
    const {id} = useParams();
    const [item, setItem] = useState();
    const fetch=async()=>{
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}comics?ts=1&apikey=3f81660f67154fd350ebf761163bc5f4&hash=d3f610ff446d6d66f65c8f19fdaead60`)
        setItem(res.data.data.results[0])
        console.log("datanuevo", res.data.data.results[0])
    }
    fetch();
    return (
      <>
      {
      (!item)? "":(
        <div>
            <div>
                <p>hola {id}</p>
                <h1>{item.name}</h1>
                <h4>{item.description}</h4>
                <h4>{item.modified}</h4>
                <h4>{item.resourceURI}</h4>
                <h4>{item.variantDescription}</h4>

            </div>

        </div>
      )
    }
      </>
    );
  };
  

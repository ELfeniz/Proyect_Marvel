import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import { getCharactersForGrid2 } from '@/modules/marvel-characters/services';

import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import Filter from '@/modules/core/components/molecules/Filter';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

const orden = {
  orderBy:"-name"
};

CharacterGridPaginated.propTypes = {
  n: PropTypes.number,
  busqueda: PropTypes.string

};


export default function CharacterGridPaginated( {n, busqueda} ) {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  const name = {
    nameStartsWith: busqueda
  };

  useEffect(() => {
    fetchCharactersAtPage();
  }, []);                        // para que no se ejecute continuamente simplemente se le da un arreglo

  async function fetchCharactersAtPage(page = 1) {
    if(n==1){
    setLoading(true);
    const data = await getCharactersForGrid(page, ITEMS_PER_PAGE, orden);
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
    console.log(data)
    console.log(data.results)
    console.log("total"+data.total)
    const res = JSON.stringify(data);  //convertir los datos a string
    const res2 = JSON.parse(res);      // cantidad de datos
    console.log(res2)
    console.log(res2.results[2].description)   // visualizar las descripciones
    }
    if(n==2){
      setLoading(true);
      const data = await getCharactersForGrid2(page, ITEMS_PER_PAGE, orden, name);
      setTotalItems(data.total);
      setCharacters(data.results);
      setLoading(false);
      console.log(data)
      console.log(data.results)
      console.log("total"+data.total)
      const res = JSON.stringify(data);  //convertir los datos a string
      const res2 = JSON.parse(res);      // cantidad de datos
      console.log(res2)
      console.log(res2.results[2].description)   // visualizar las descripciones
      }
      if(n==3){
   
        const autor = {
          series: busqueda
        };

        const orden = {
          orderBy:"-name"
        };

      setLoading(true);
      const data = await getCharactersForGrid2(page, ITEMS_PER_PAGE, autor, orden);
      setTotalItems(data.total);
      setCharacters(data.results);
      setLoading(false);

      }
  }

  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  return (
    <>
      <Filter query={queryParams} onQueryChange={onQueryChange} totalItems={totalItems}/>
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid2
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
      <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </>
  );
}

CharacterGrid2.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number,
};

function CharacterGrid2({ characters, isLoading, itemsPerPage}) {
  if (isLoading && characters.length === 0) {
    return <CharacterGridSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name, image, description, id}, index) => (
    <CharacterCard name={name} image={image} key={index} isSkeleton={isLoading} description={description} id={id}/>
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} isSkeleton />);
};



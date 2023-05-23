import React, { useContext, useEffect, useState } from 'react'
import axios  from 'axios';
import MiContexto from './shared/MiContexto';

const Characters = () => {

    const [page, setPage] = useState(1);
        const [characters, setCharacters] = useState([]);
        const {name, name2} = useContext(MiContexto);

    const getCharacters = async() => {
        const res = await axios(`https://rickandmortyapi.com/api/character?page=${page}`)
        
        // const resJson = await res.json()

        setCharacters(res.data.results)
    }

    useEffect(() => {
        getCharacters()
    },[page])
    
  return (
    <div>
        {name}

        {name2}
        {page < 42 && <button onClick={() => setPage(page + 1)} >Pagina más</button> }
        {page}
        {page > 1 && <button onClick={() => setPage(page - 1)} >Pagina menos</button>}
        {characters.filter((character) => character.name.includes(name)).map((character, index) => {return <div key={index}>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
        </div>})}
    </div>
  )
}

export default Characters
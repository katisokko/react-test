import React, { useState, useEffect } from 'react'
import Pais from './Pais'
import './App.css'
import PokemoniInfo from './PokemoniInfo'
import PokemonideList from './PokemonideList'

function App() {
  const [valitudPokemon, setValitudPokemon] = useState()
  const [pokemonid, setPokemonid] = useState([])
  const [eelmineUrl, setEelmineUrl] = useState(null)
  const [jargmineUrl, setJargmineUrl] = useState(null)

  useEffect(() => {
    pariPokemonid('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
  }, [])

  const pariPokemonid = async (url) => {
    if (!url) return
    const laetudPokemonid = await (await fetch(url)).json()
    setPokemonid(laetudPokemonid.results)
    setEelmineUrl(laetudPokemonid.previous)
    setJargmineUrl(laetudPokemonid.next)
  }

  const pariPokemoniInfo = async (url) => {
    const pokemoniInfo = await (await fetch(url)).json()
    setValitudPokemon(pokemoniInfo)
  }

  return (
    <div className="App">
      <Pais />
      <a onClick={() => { setValitudPokemon(undefined) }}>Kustuta valitud pokemon</a>
      <br />
      <br />
      {valitudPokemon ?
        <PokemoniInfo pokemon={valitudPokemon} /> :
        <PokemonideList pokemonid={pokemonid} pariPokemoniInfo={pariPokemoniInfo} />}
      <div>
        <span onClick={() => { pariPokemonid(eelmineUrl) }}>{'<'} Eelmine leht</span>
        <span> | </span>
        <span onClick={() => { pariPokemonid(jargmineUrl) }}>Järgmine leht {'>'}</span>
      </div>
    </div>
  )
}

export default App

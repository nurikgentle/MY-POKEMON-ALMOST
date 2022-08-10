import React from 'react'
import { connect } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import './pokemonpage.css'

const PokemonPage = (props) => {
  console.log("POKEMON PAGE", props);
  return (
    <div className='indPoke'>
        <Link to='/'>Вернуться в Каталог </Link>
        <h2>{props.pokemon.name}</h2>
        <img src={props.pokemon.sprites.other.dream_world.front_default} alt=''/>
    </div>
  )
}

const mstp = state => {
    return {
        pokemon: state.pkr.pokemon
    }
}

export default connect(mstp, {})(PokemonPage)
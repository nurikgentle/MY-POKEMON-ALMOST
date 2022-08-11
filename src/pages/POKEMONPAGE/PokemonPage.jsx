import React from 'react'
import { connect } from 'react-redux/es/exports'
import { Link, useNavigate } from 'react-router-dom'
import './pokemonpage.css'
import Back from '../../assets/back.svg'

const PokemonPage = (props) => {
  console.log("POKEMON PAGE", props);

  const navigate = useNavigate()

  return (
    <div className='indPoke'>
        <div className='beggining'>
          <img onClick={() => navigate('/')} src={Back} alt=''/>
           <Link className='linkk' to='/'>Вернуться в Каталог </Link>
        </div>
        <div className='pokemon-information'>
          <div className='text'>
            <p>{props.description.flavor_text_entries[1].flavor_text}</p>
          </div>
          <div className='single-pokemon'>
            <div className='rounded'>
              <img src={props.pokemon.sprites.other.dream_world.front_default} alt=''/>
            </div>
            <h2>{props.pokemon.name}</h2>
          </div>
        </div>
    </div>
  )
}

const mstp = state => {
    return {
        pokemon: state.pkr.pokemon,
        description: state.pkr.description,
    }
}

export default connect(mstp, {})(PokemonPage)
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/NAVBAR/Navbar';
import { Routes, Route } from 'react-router-dom'
import All from './pages/ALL/All';
import Contact from './pages/CONTACTS/Contact';
import Help from './pages/HELP/Help';
import Footer from './components/FOOTER/Footer';
import { connect, useDispatch } from 'react-redux/es/exports';
import { getPokemon } from './store/actions/index';
import PokemonPage from './pages/POKEMONPAGE/PokemonPage';

function App(props) {
  console.log("PROPS IN APP", props);

  const dispatch = useDispatch()

  useEffect(() => {
    props.getPokemon("https://pokeapi.co/api/v2/pokemon/")
    dispatch({type: "UPDATE_LOADING"})
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <All /> }/>
        <Route path='/help' element={ <Help /> }/>
        <Route path='/contacts' element={ <Contact /> } />
        <Route path={`/${props.pokemon.name}`} element={ <PokemonPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

const mstp = state => {


  return {
    isLoading: state.pkr.isLoading,
    isError: state.pkr.isError,
    errorMsg: state.pkr.error,
    pokemon: state.pkr.pokemon
  }
}

export default connect(mstp, {getPokemon})(App)

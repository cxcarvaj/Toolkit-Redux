import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <ul>
        <li>1. Bulbasaur</li>
        <li>2. Ivysaur</li>
        <li>3. Venusaur</li>
      </ul>
    </>
  );
};

export default PokemonApp;

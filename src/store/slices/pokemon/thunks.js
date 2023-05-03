import { pokemonAPI } from '../../../api/pokemonAPI';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO: make a request to the API
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await response.json();
    const { data } = await pokemonAPI.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(
      setPokemons({
        nextPage: page + 1,
        pokemons: data.results
      })
    );
  };
};

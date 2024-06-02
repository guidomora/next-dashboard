import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites:{ [key: string]: SimplePokemon} // key es el id del pokemon
}

// const gewtInitialState = ():PokemonsState => {
    
//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

//     return favorites
// }

const initialState:PokemonsState = {
    favorites: {} // lo inicializamos vacio
    // ...gewtInitialState()
    // '1': {id: '1',name: 'bulbasaur',},
    // '2': {id: '2',name: 'ivysaur',},
    // '3': {id: '3',name: 'venusaur',},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavouritePokemons(state, action:PayloadAction<{ [key: string]: SimplePokemon}>){
        state.favorites = action.payload
    },


    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
        const pokemon = action.payload
        const { id } = pokemon
        if (!!state.favorites[id]) { // la doble negacion convierte el valor a booleano, si existe el pokemon lo borramos
           delete state.favorites[id]
           return
        } else {
            state.favorites[id] = pokemon // si no existe lo añadimos
        }

        // esto no se debe hacer en produccion, es solo para probar
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }
  }
});

export const {toggleFavorite, setFavouritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer
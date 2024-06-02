'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useEffect, useState } from "react"
import { IoHeartOutline } from "react-icons/io5"


export const FavoritePokemons = () => {
    const pokemons = useAppSelector(state => state.pokemons.favorites)
    const pokemonsArray = Object.values(pokemons) // convertimos el objeto en un array
    const [poke, setPoke] = useState(pokemonsArray)

    // useEffect(() => {
    //   setPoke(pokemonsArray)
    // }, [pokemonsArray])
    

    return (
        <>
            {(pokemonsArray.length) ? <PokemonGrid pokemons={pokemonsArray} /> : <NoFavorites />}
        </>
    )
}


export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline className="text-red-500" size={100} />
            <p className="text-3xl text-gray-800">No favorite pokemons yet</p>
        </div>
    )
}



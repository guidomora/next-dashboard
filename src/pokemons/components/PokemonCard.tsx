'use client'

import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import Image from "next/image"
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "@/store"
import { toggleFavorite } from "@/store/pokemons/pokemons"

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]) // con la doble negacion convertimos el valor a booleano
    const dispatch = useAppDispatch()

    const toggle = () => {
        dispatch(toggleFavorite(pokemon))
        console.log(pokemon);
    }


    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        key={pokemon.id}
                        width={100}
                        height={100}
                        alt={pokemon.name}
                        priority={false} // las imagenes se cargan bajo demanda 
                        />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link href={`/dashboard/pokemons/pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More info
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={toggle} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <div className="text-red-600">
                            {isFavorite ? <IoHeart /> : <IoHeartOutline />}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            </p>
                            <p className="text-xs text-gray-500">Click to change</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


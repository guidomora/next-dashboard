import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons"
import Image from "next/image"



const PokemonsPage = async () => {

    return (
        <div className="flex flex-col">
            <span className="text-5xl mr-r">Favourite Pokemons <small className="text-blue-500">Global state</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    )
}

export default PokemonsPage


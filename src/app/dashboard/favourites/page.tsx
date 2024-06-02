

import { FavoritePokemons} from "@/pokemons"



const PokemonsPage = async () => {

    
    

    return (
        <div className="flex flex-col">
            <span className="text-5xl mr-r">Favourite Pokemons <small className="text-blue-500">Global state</small></span>
            <FavoritePokemons />
        </div>
    )
}

export default PokemonsPage





interface Props {
    params: {id: string}
}

const PokemonPage = ({params}:Props) => {
    

  return (
    <div>Pokemon {params.id}</div>
  )
}

export default PokemonPage
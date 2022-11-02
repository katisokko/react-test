const Pokemon = (props) => {
    console.log(props)
    return (
        <div className="pokemonideinfo">
            <img src={props.pokemon.sprites.front_default} />
            <div>ID: {props.pokemon.id}</div>
            <div>Nimi: {props.pokemon.name}</div>
            <div>Kaal: {props.pokemon.weight}kg</div>
            <div>Kõrgus: {props.pokemon.height}ft</div>
        </div>
    )
}

export default Pokemon
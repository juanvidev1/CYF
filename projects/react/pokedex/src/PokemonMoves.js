import React, { useEffect, useState } from "react";

const PokemonMoves = (props) => {
    const [ pokemonData, setPokemonData ] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPokemonData(data);
        });
    }, [props.pokemonId]);

    return (
      <div>
        {
            pokemonData && (
            <>
                <p>{pokemonData.name}'s moves:</p>
                <ul>
                {pokemonData.moves.map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                ))}
                </ul>
            </>
            )
        }
      </div>
    );
};

export default PokemonMoves;
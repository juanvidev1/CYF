import React from "react";
import { useState } from "react";
const CaughtPokemon = (props) => {
  const [ caught, setCaught ] = useState([]);
  const catchPokemon = () => {
    setCaught(caught.concat("Charizard"));
    /*const pokemonList = ["Charizard", "Blastoise", "Gloom", "Villeplume", "Pikachu"];
    let randomPkmn = pokemonList[(Math.random() * pokemonList.length) | 0];
    setCaught(caught.concat(randomPkmn));*/
  };
    return(
      <>
      <p>Caught {caught.length} pokemon on {props.date}<br /><button type="button" className="btn btn-sm btn-primary" onClick={catchPokemon}>Catch Pokemon</button></p>
      <ul>
        {
          caught.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))
        }
      </ul>
      </>
    );
  };

  export default CaughtPokemon;
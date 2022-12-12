import React from "react";
import { useState } from "react";
const CaughtPokemon = (props) => {
  const [ caught, setCaught ] = useState([]);
  const [ pokemonNameInput, setPokemonNameInput] = useState("");
  //
  const changePokemonName = (event) => {
    setPokemonNameInput(event.target.value);
  };
  //
  const catchPokemon = () => {
    // const pokemonList = ["Charizard", "Blastoise", "Gloom", "Villeplume", "Pikachu"];
    // let pokemonList = [];
    // let randomPkmn = pokemonList[(Math.random() * pokemonList.length) | 0];
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
    }
    setPokemonNameInput("");
  };
  //
    return(
      <>
      <p>Caught {caught.length} pokemon on {props.date}<br /><input className="me-2" type="text" value={pokemonNameInput} onChange={changePokemonName} /><button className="btn btn-primary" onClick={catchPokemon}>Catch Pokemon</button></p>
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
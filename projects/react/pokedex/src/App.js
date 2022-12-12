// import react from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App () {
  function logWhenClicked () {
    console.log("The Charizard was clicked");
  }
  return(
    <div>
      <Logo appName="Juanvi's" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Hyperbeam", "Flamethrower", "Steel wing"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;

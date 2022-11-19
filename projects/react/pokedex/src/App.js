// import react from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App () {
  function logWhenClicked () {
    console.log("The Charizard was clicked");
  }
  return(
    <div>
      <Logo appName="Juanvi's" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Hyperbeam", "Flamethrower", "Steel wing"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;

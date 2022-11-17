// import react from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";


function App () {
  return(
    <div>
      <Logo appName="Juanvi's" />
      <BestPokemon abilities={["Hyperbeam", "Flamethrower", "Steel wing"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;

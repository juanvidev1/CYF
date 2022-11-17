const Logo = (props) => {
    // const pokedexName = "Juanvi's";
    console.log(props);
    return(
    <header>
      <h1>Welcome to the {props.appName} pokedex</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="charizard" />
    </header>
    );
  };

  export default Logo;
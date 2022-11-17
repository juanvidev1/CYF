const CaughtPokemon = (props) => {
    //const date = {new Date().toLocaleDateString()}
    console.log(props)
    return(
      <p>Caught 0 pokemon on {props.date}</p>
    );
  };

  export default CaughtPokemon;
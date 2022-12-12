const BestPokemon = (props) => {
    // let abilities = ["Hyperbeam", "Flamethrower", "Steel wing"];
    return(
      <div>
        <p>The best pokemon is charizard</p>
        <ul>
          {
            props.abilities.map((props, index) => (
              <li key={index}>{props}</li>
            ))
          }
        </ul>
      </div>
    );
  };

  export default BestPokemon;
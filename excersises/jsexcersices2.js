let person = {
    name: "Alice",
    age: 25,
    greet: function () {
        return "Hello everybody";
    },
    sayName: function () {
        return "My name is " + this.name; // It's better to use normal functions
    },
  };
  
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  console.log(
    `Expected result: Hello everybody. Actual result: ${person.greet()}`
  );
  console.log(
    `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
  );

  /* Excersise 2
  ********************* */

  

/*Excersise 1
**************************/
// WRITE CODE BELOW THIS
let kitten = {
    name: "Gilbert",
    age: 3,
    furColor: "Yellow"
}

// WRITE CODE ABOVE THIS
console.log(kitten.name);

/*Excersise2 
*********************/
let dog = {
    name: "Billy",
    wantsToPlay: false,
  };
  
  // WRITE CODE BELOW THIS LINE
  dog.name = "Rex"
  dog.wantsToPlay = true
  // WRITE CODE ABOVE THIS LINE
  
  console.log(dog.name);
  console.log(dog.wantsToPlay);

  /*Excersise 3
  ***********************/
  let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
    },
  };
  
  /*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */
  // Object before data update
  console.log(house);
  // - change the address of "house" to '51 Berkley Road'
  house.address = "51 Berkley Road"
  // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
  house.previousOwners = ["Brian M.", "Fiona S."]
  // - change the last name of the current owner of "house" to "Montgomery"
  house.currentOwner.lastName = "Montgomery"

  /*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  console.log(
    `Expected result: 51 Berkley Road. Actual result: ${house.address}`
  );
  console.log(
    `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
  );
  console.log(
    `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
  );

  /* Excersise 4
  ********************/
  let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
    },
  };
  
  let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez",
  };
  
  /*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */
  
  // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
  house.currentOwner = newCurrentOwner;
  // - from the list of previous owners, replace only "John A." with "Stephen B."
  house.previousOwners[1] = "Stephen B."
  // - give the house a new property called 'isForSale' with the value 'false'
  house.isForSale = false
  
  /*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  console.log(
    `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
      house.currentOwner === newCurrentOwner
    }`
  );
  console.log(
    `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
  );
  console.log(`Expected result: false. Actual result: ${house.isForSale}`);

  /*Excersise 5 
  *******************/

  let kinningParkHouse = {
    address: "1 Kinning Park",
    price: 180000,
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
      email: "margaret@fake-emails.com",
    },
  };
  
  let parkAvenueHouse = {
    address: "50 Park Avenue",
    price: 195000,
    currentOwner: {
      firstName: "Marie",
      lastName: "McDonald",
      email: "marie.m@real-emails.com",
    },
  };
  
  /*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */
  
  // returns the full name (first name + last name) of the owner of the house
  function getOwnerFullName(house) {
    let ownerFullName = kinningParkHouse.currentOwner.firstName + " " + kinningParkHouse.currentOwner.lastName;
    return ownerFullName;
  }
  
  // returns an array of the owners' email addresses of the two houses
  function getEmailAddresses(house1, house2) {
    const email1 = kinningParkHouse.currentOwner.email;
    const email2 = parkAvenueHouse.currentOwner.email;
    let emailList = [email1, email2];
    return emailList;
  }
  
  // returns the address for the cheapest house out of the two
  function getCheapestAddress(house1, house2) {
    const price1 = kinningParkHouse.price;
    const price2 = parkAvenueHouse.price;
    const address1 = kinningParkHouse.address;
    const address2 = parkAvenueHouse.address;
    if (price1 < price2) {
        return address1;
    }
    return address2;
  }
  
  /*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  console.log(
    `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
      kinningParkHouse
    )}`
  );
  console.log(
    `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
      kinningParkHouse,
      parkAvenueHouse
    )}`
  );
  console.log(
    `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
      parkAvenueHouse,
      kinningParkHouse
    )}`
  );
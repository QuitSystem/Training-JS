function panggilObjects() {
    var car = {
      type: "sport",
      price: 2000000000,
      color: "black",
      year: [2000,2001,2002,2003,2004,2005]
    }
    //   Objects add objects property   //
    car.from = 'Japan'; 
    //   Objects change value   //
    car.type = "supersport";
    car.price = 100000000;
    console.log(car.from)
    console.log(car.type)
  
  //   Objects   //
  //   Objects with array   //
  console.log(car.year[4])
  }
  
  
  panggilObjects()
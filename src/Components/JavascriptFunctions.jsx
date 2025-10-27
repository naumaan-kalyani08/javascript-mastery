import React from "react";

const JavascriptFunctions = () => {
  const higherOrderFunction = (cars, carAction) => {
    cars.forEach((car) => carAction(car));
  };
  const displayCar = (car) => {
    console.log(`car: ${car}`);
  };
  const cars = ["bmw", "mercedes", "audi"];
  higherOrderFunction(cars, displayCar);
  return (
    <div>
      <h2>Javascript Functions Component</h2>

      <p>Higher order function</p>
      <p>
        the higher order function in javascript is the function that accepts an
        another function as an argument for it given below button is an example
      </p>
      <button onClick={higherOrderFunction}>click and see console</button>
    </div>
  );
};

export default JavascriptFunctions;

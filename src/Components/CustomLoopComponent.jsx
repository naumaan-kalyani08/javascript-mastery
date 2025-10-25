import { useEffect, useState } from "react";

const CustomLoopComponent = () => {
  const [ForLoop, setForLoop] = useState(null);
  const [additionLoopNumber, setAdditionLoopNumber] = useState(null);
  const [ReverseCount, setReverseCount] = useState(null);
  const forLoopPractice = () => {
    const values = [];
    for (let i = 0; i < 5; i++) {
      values.push(i);
    }
    setForLoop(values);
  };
  const additionOfNumbers = () => {
    alert("check console for output");
    for (let i = 1; i <= 17; i += i) {
      setAdditionLoopNumber(i);
      console.log(i);
    }
  };
  const doWhilePractice = () => {
    let i = 0;
    do {
      i++;
      console.log(i);
    } while (i < 1);
  };

  const EvenNumberPrint = () => {
    let i = 1;
    do {
      if (i % 2 === 0) {
        console.log(i);
      }
      i++;
    } while (i <= 20);
  };

  const multipleOfThreeNumber = () => {
    let count = 0;
    let i = 1;
    while (i <= 50) {
      if (i % 3 === 0) {
        count++;
      }
      i++;
    }
    console.log(count);
  };

  const reverseCountDown = () => {
    const values = [];
    let i = 10;
    while (i >= 0) {
      console.log(i);
      values.push(i);
      i--;
    }
    setReverseCount(values);
  };

  const sumOfEvenNumber = () => {
    console.log("sumOfEvenNumber called");
    let total = 0;
    let i = 2;
    do {
      i % 2 == 0 ? (total += i) : null;
      i++;
    } while (i <= 50);
    console.log("total", total);
  };

  //benefit no need to console log each time for each value that do exists in an array
  const practiceForEachLoop = () => {
    const fruits = [
      "apple",
      "banana",
      "kiwi",
      "orange",
      "pomogrenate",
      "pear",
      "chikoo",
      "pineapple",
    ];

    fruits.forEach((fruit) => console.log(fruit));
  };
  //from this a new concept is found to be learn
  // a technique to fing the largest number from an array
  const largetOfNumber = () => {
    let numbers = [10, 5, 8, 20, 3];
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    console.log("largest number is:", largest);
  };

  const forInLoopPracitce = () => {
    let userInfo = {
      name: "John",
      age: 30,
      city: "New York",
    };

    for (let CustomKey in userInfo) {
      console.log(CustomKey);
    }
  };

  const forOfLoopPractice = () => {
    let colors = ["red", "green", "blue"];
    for (let [index, colorValues] of colors) {
      console.log(`array value ${colorValues} with index ${index} `);
    }
  };

  const nestedLoopPractice = () => {
    for (let i = 6; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  };
  useEffect(() => {
    sumOfEvenNumber();
    largetOfNumber();
    forInLoopPracitce();
    forOfLoopPractice();
    practiceForEachLoop();
    nestedLoopPractice();
  }, []);
  return (
    <div>
      <h2>Custom Loop Component</h2>
      <button onClick={forLoopPractice}> click to run the loop</button>

      <div>
        <p>All values from loop:</p>
        <ul>
          {ForLoop?.map((value, index) => (
            <li key={index}>
              Iteration {index}: {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        addition of numbers from 0 to 5
        <button onClick={additionOfNumbers}>
          click to run the addtion loop
        </button>
        {additionLoopNumber}
      </div>
      <button onClick={doWhilePractice}>do while operation</button>
      <button onClick={EvenNumberPrint}> Print Even Number</button>
      <button
        className="bg-red-100 text-black ml-5 px-2.5 py-2 rounded-lg"
        onClick={multipleOfThreeNumber}
      >
        {" "}
        number of mulitple of 3 number
      </button>

      <button onClick={reverseCountDown}> click for reverse </button>
      {ReverseCount?.map((value) => (
        <p>{value}</p>
      ))}
    </div>
  );
};

export default CustomLoopComponent;

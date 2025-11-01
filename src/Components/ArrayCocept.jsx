import { useState } from "react";

const ArrayCocept = () => {
  const [NumberArray, setNumberArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [AlphabetNumber, setAlphabetNumber] = useState([
    "a",
    "c",
    "d",
    "e",
    "b",
    "n",
  ]);
  const [reverseArray, setReverseArray] = useState(["a", "b", "c", "d", "e"]);
  const reverseArrayExample = () => {
    setReverseArray([...reverseArray].reverse());
  };
  const [RandomNumber, setRandomNumber] = useState([
    34, 12, 5, 67, 89, 2, 1, 0, 100, 23,
  ]);
  const PushExample = () => {
    NumberArray.push(6, 7, 8, 9);
    // add a number from last of array
    setNumberArray([...NumberArray]);
  };
  //remove a number from last of array
  const PopExample = () => {
    NumberArray.pop(3);
    setNumberArray([...NumberArray]);
  };
  // remove a number from start of an array
  const shiftExample = () => {
    NumberArray.shift();
    setNumberArray([...NumberArray]);
  };

  //add a number from start of an array
  const UnShiftExample = () => {
    NumberArray.unshift(0);
    setNumberArray([...NumberArray]);
  };
  // add/remove a number from array
  const SpliceExaple = () => {
    //NumberArray [1, 2, 3, 4, 5, 6, 7, 8, 9]

    NumberArray.splice(2, 0, 2.5, 2.75);
    // splice(2, 0, 2.5, 2.75) means start at index 2, remove 0 elements, and add 2.5 and 2.75
    //if we mention 1 instead of 0 then it will remove 1 element from index 2
    setNumberArray([...NumberArray]);
  };
  // sort an array inistially from ascending order
  const sortSimpleExample = () => {
    AlphabetNumber.sort();
    setAlphabetNumber([...AlphabetNumber]);
  };
  // sort an array in ascending order
  const sortNumberExampleAscending = () => {
    // numArray.sort((a,b)=>a-b)
    RandomNumber.sort((a, b) => a - b);
    setRandomNumber([...RandomNumber]);
  };
  //  descending order
  const sortNumberExampleDescending = () => {
    RandomNumber.sort((a, b) => b - a);
    setRandomNumber([...RandomNumber]);
  };
  //fills up with static value
  const FillExample = () => {
    RandomNumber.fill(0);
    setRandomNumber([...RandomNumber]);
  };
  const copyWithinExample = () => {
    // [1, 2, 3, 4, 5,6,7,8,9]
    // [0, 1, 2, 3, 4,5,6,7,8]
    NumberArray.copyWithin(0, 2, 6);
    setRandomNumber([...RandomNumber]);
  };
  const SliceExaple = () => {
    //NumberArray [1, 2, 3, 4, 5, 6, 7, 8, 9]
    //NumberArray [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const newValue = NumberArray.slice(2, 5);
    // slice (2,5) means start at index 2 and end at index 5 (not included 5)
    //slice(2) means start at index 2 and go till end of array
    // slice() means copy the whole array
    // slice(-4) means start from index 4 from last
    setNumberArray(newValue);
  };

  const MapExample = () => {
    const result = NumberArray.map((num) => num * 2);
    setNumberArray(result);
  };
  return (
    <div>
      <h1>Array</h1>
      <ul>
        <li>
          It is a data sctrucutre in javascript that is used to store mulitple
          values in a single variable
        </li>
        <li>
          it can store data of different data types like string, number,
          boolean, object,function , a nested array etc
        </li>
        <li>
          its a zero based index data structure means the first element of the
          array is stored at index 0.
        </li>
        <li>
          as it is a index based data structure then we can access the elements
          of the array using their index.
        </li>
        <li>
          arrays are mutable in javascript means we can change the elements of
          the array after its creation.
        </li>
        <li>
          arrays have many built in methods like
          push,pop,shift,unshift,map,filter,reduce etc
        </li>
        <li>
          arrays can be created using array literal syntax or using array
          constructor
        </li>
        <li>
          arrays can be iterated using for loop,forEach loop,map method etc
        </li>
        <li>
          arrays can be nested inside another array to create multidimensional
          arrays
        </li>
        <li>
          arrays are commonly used in javascript for storing and manipulating
        </li>
        <li>arrays can be checked using Array.isArray() method</li>
        <li>
          arrays can be converted to string using toString() or join() method
        </li>
        <li>arrays can be spreaded using spread operator (...)</li>
        <li>arrays can be destructured to extract values into variables</li>
        <li>
          arrays can be concatenated using concat() method or spread operators
        </li>
      </ul>
      <p>Array Methods</p>
      <div className="">
        <p>Current Array</p>
        <p>{NumberArray}</p>
        <p className="inline-block bg-green-100 text-green-500 font-bold mb-1 p-2">
          {AlphabetNumber}
        </p>
        <br />
        <p className="p-2 inline-block bg-red-100 text-red-500 font-bold mb-1">
          {RandomNumber}
        </p>
        <p className=" p-2 inline-block bg-blue-100 text-blue-500 font-bold mb-1">
          {reverseArray}
        </p>
      </div>
      <ol>
        <li>
          <b>Mutable (change the orignal array)</b>
          <table>
            <tr>
              <th>Method</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Push</td>
              <td>add one or more element from the end of an array</td>
              <th>
                <button onClick={PushExample}>PushExample</button>
              </th>
            </tr>
            <tr>
              <td>Pop</td>
              <td>remove one element from the end of an array</td>
              <th>
                <button onClick={PopExample}>PushExample</button>
              </th>
            </tr>
            <tr>
              <td>shift</td>
              <td>
                remove one or more element from the start of an Array. note this
                method is not suggestable to use as this remove element from the
                first so due to which index of each element changes. its not
                issue when data is limited but do when data is huge
              </td>
              <th>
                <button onClick={shiftExample}>Shift Example</button>
              </th>
            </tr>
            <tr>
              <td>unshift</td>
              <td>Add one or more element from the start of an array</td>
              <th>
                <button onClick={UnShiftExample}>UnShift Example</button>
              </th>
            </tr>
            <tr>
              <td>Splice</td>
              <td>
                add/remove element from any posiition of an aaray.
                array.Splice(index,deleteCount,addItem)
              </td>
              <td>
                <button onClick={SpliceExaple}>Splice Example</button>
              </td>
            </tr>

            <tr>
              <td>Sort</td>
              <td>
                it is used to arrange the elements of and array in a specific
                order either ascending or descending. By default, the sort()
                method sorts the elements as strings in alphabetcial manner such
                as 'a' 'b' 'c' etc and so on like this. to sort in number we
                need to compare value by providing a compare function.
              </td>
              <td>
                <button onClick={sortSimpleExample}>Sort Example</button>
                <button onClick={sortNumberExampleAscending}>
                  SOrt num example
                </button>
                <button onClick={sortNumberExampleDescending}>
                  SOrt num example
                </button>
              </td>
            </tr>
            <tr>
              <td>Reverse</td>
              <td>it is use to reverse the order of elements in an array</td>
              <td>
                <button onClick={reverseArrayExample}>Reverse</button>
              </td>
            </tr>
            <tr>
              <td>
                <code>fill</code>
              </td>
              <td>
                fills an array with the **same static value** for a range.
                <mark>
                  its purpose in real life is rest a form scoreboard or
                  somewhere where on a click only a certain data should be shown
                </mark>
              </td>
              <td>
                <button onClick={FillExample}>Fill</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                it is used to copy a specific or range value in that array and
                paste same as well in it too at the position which is have been
                described in the function{" "}
                <mark>copyWithin(target,start,end)</mark>
                target: index at which to copy the sequence to. start:index at
                which to start copying elements from. end:index at which to end
                copying elements from.(end not included) start less than end
              </td>
              <td>
                <button onClick={copyWithinExample}>Copywithin</button>
              </td>
            </tr>
          </table>
        </li>
        <li>Non-mutable</li>
        <table>
          <tr>
            <th>sr no</th>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
          <tr>
            <td>1</td>
            <td>map</td>
            <td>
              This function is used to create a new array by applying function
              to every element{" "}
              <mark>array.map(callback(element, index, array))</mark>
            </td>
            <td>
              <button onClick={MapExample}>check console</button>
            </td>
          </tr>
          <tr>
            <td>Slice</td>
            <td>
              use to make a shallow copy of a portion of an array. (shallow
              meand it copies the elements but not nested objects or arrays. in
              short same element new array )
            </td>
            <td>
              <button onClick={SliceExaple}>Slice example</button>
            </td>
          </tr>
        </table>
      </ol>
    </div>
  );
};

export default ArrayCocept;

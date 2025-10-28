import { useState } from "react";

const ArrayCocept = () => {
  const [NumberArray, setNumberArray] = useState([1, 2, 3, 4, 5]);
  const PushExample = () => {
    NumberArray.push(6, 7, 8, 9);
    setNumberArray([...NumberArray]);
  };
  const PopExample = () => {
    NumberArray.pop(3);
    setNumberArray([...NumberArray]);
  };
  const shiftExample = () => {
    NumberArray.shift();
    setNumberArray([...NumberArray]);
  };
  const UnShiftExample = () => {
    NumberArray.unshift(0);
    setNumberArray([...NumberArray]);
  };
  const SpliceExaple = () => {
    NumberArray.splice(2, 0, 2.5);
    setNumberArray([...NumberArray]);
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
          </table>
        </li>
        <li>Non-mutable</li>
      </ol>
    </div>
  );
};

export default ArrayCocept;

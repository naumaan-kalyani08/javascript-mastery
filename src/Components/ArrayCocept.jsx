import { useState } from "react";
import Transition from "../Layout/Transition";

const ArrayCocept = () => {
  // Initial States
  const [nestedArray, setNestedArray] = useState([
    1,
    2,
    3,
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [numberArray, setNumberArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [alphabetArray, setAlphabetArray] = useState([
    "a",
    "c",
    "d",
    "e",
    "b",
    "n",
  ]);
  const [reverseArray, setReverseArray] = useState(["a", "b", "c", "d", "e"]);
  const [randomNumbers, setRandomNumbers] = useState([
    34, 12, 5, 67, 89, 2, 1, 0, 100, 23,
  ]);

  // Helper to reset all arrays
  const resetAll = () => {
    setNumberArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    setAlphabetArray(["a", "c", "d", "e", "b", "n"]);
    setReverseArray(["a", "b", "c", "d", "e"]);
    setRandomNumbers([34, 12, 5, 67, 89, 2, 1, 0, 100, 23]);
    setNestedArray([1, 2, 3, [4, 5, 6], [7, 8, 9]]);
  };

  // === Mutable Methods ===
  const pushExample = () => {
    const newArr = [...numberArray, 10, 11, 12];
    setNumberArray(newArr);
  };

  const popExample = () => {
    const newArr = numberArray.slice(0, -1);
    setNumberArray(newArr);
  };

  const shiftExample = () => {
    const newArr = numberArray.slice(1);
    setNumberArray(newArr);
  };

  const unshiftExample = () => {
    const newArr = [0, ...numberArray];
    setNumberArray(newArr);
  };

  const spliceExample = () => {
    const newArr = [...numberArray];
    newArr.splice(2, 0, 2.5, 2.75); // Insert at index 2
    setNumberArray(newArr);
  };

  const sortAlphabetExample = () => {
    const newArr = [...alphabetArray].sort();
    setAlphabetArray(newArr);
  };

  const sortNumbersAsc = () => {
    const newArr = [...randomNumbers].sort((a, b) => a - b);
    setRandomNumbers(newArr);
  };

  const sortNumbersDesc = () => {
    const newArr = [...randomNumbers].sort((a, b) => b - a);
    setRandomNumbers(newArr);
  };

  const fillExample = () => {
    const newArr = [...randomNumbers].fill(0, 2, 6); // Fill from index 2 to 5
    setRandomNumbers(newArr);
  };

  const copyWithinExample = () => {
    const newArr = [...numberArray].copyWithin(0, 3, 6);
    setNumberArray(newArr);
  };

  const reverseExample = () => {
    const newArr = [...reverseArray].reverse();
    setReverseArray(newArr);
  };

  // === Immutable Methods ===
  const mapExample = () => {
    const result = numberArray.map((num) => num * 2);
    setNumberArray(result);
  };

  const filterExample = () => {
    const result = numberArray.filter((num) => num % 2 === 0);
    setNumberArray(result);
  };

  const reduceExample = () => {
    const sum = numberArray.reduce((acc, curr) => acc + curr, 0);
    alert(`Sum: ${sum}`);
    console.log("Reduce Result (Sum):", sum);
  };

  const sliceExample = () => {
    const result = numberArray.slice(2, 6);
    setNumberArray(result);
  };

  const concatExample = () => {
    const result = numberArray.concat(reverseArray, randomNumbers);
    setNumberArray(result);
  };

  const spreadExample = () => {
    const result = [...numberArray, ...reverseArray, ...randomNumbers];
    setNumberArray(result);
  };

  const flatExample = () => {
    const result = nestedArray.flat();
    setNestedArray(result);
  };

  const joinExample = () => {
    const result = numberArray.join(" - ");
    alert(`Joined: ${result}`);
    console.log("Join Result:", result);
  };

  const flatMapExample = () => {
    const result = numberArray.flatMap((x) => [x, x * 2]);
    setNumberArray(result);
  };

  const findExample = () => {
    const result = numberArray.find((x) => x > 6);
    alert(`First number > 6: ${result}`);
    console.log("Find Result:", result);
  };

  const findIndexExample = () => {
    const result = numberArray.findIndex((x) => x > 7);
    alert(`Index of first > 7: ${result}`);
    console.log("FindIndex Result:", result);
  };

  const indexOfExample = () => {
    const result = numberArray.indexOf(7);
    alert(`Index of 7: ${result}`);
    console.log("IndexOf Result:", result);
  };

  // === Modern Immutable Methods ===
  const toSortedExample = () => {
    const sorted = [...randomNumbers].toSorted((a, b) => a - b);
    setRandomNumbers(sorted);
  };

  const toReversedExample = () => {
    const reversed = [...reverseArray].toReversed();
    setReverseArray(reversed);
  };

  const toSplicedExample = () => {
    const spliced = numberArray.toSpliced(2, 1, 99);
    setNumberArray(spliced);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">JavaScript Array Concepts</h1>

      {/* Reset Button */}
      <button
        onClick={resetAll}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Reset All Arrays
      </button>

      {/* Array Info */}
      <section className="mb-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">About Arrays</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Zero-indexed collection of values</li>
          <li>Can hold mixed data types</li>
          <li>Mutable by default</li>
          <li>Rich built-in methods: push, map, filter, etc.</li>
          <li>Supports nesting (multi-dimensional)</li>
          <li>
            Use <code>Array.isArray()</code> to check type
          </li>
          <li>
            Spread operator <code>...</code> for copying/merging
          </li>
        </ul>
      </section>

      {/* Live Arrays Display */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <p className="font-semibold text-green-800">Number Array</p>
          <p className="font-mono text-sm">[{numberArray.join(", ")}]</p>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <p className="font-semibold text-blue-800">Alphabet Array</p>
          <p className="font-mono text-sm">[{alphabetArray.join(", ")}]</p>
        </div>
        <div className="bg-red-50 p-3 rounded border border-red-200">
          <p className="font-semibold text-red-800">Random Numbers</p>
          <p className="font-mono text-sm">[{randomNumbers.join(", ")}]</p>
        </div>
        <div className="bg-purple-50 p-3 rounded border border-purple-200">
          <p className="font-semibold text-purple-800">Reverse Array</p>
          <p className="font-mono text-sm">[{reverseArray.join(", ")}]</p>
        </div>
        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
          <p className="font-semibold text-yellow-800">Nested Array</p>
          <p className="font-mono text-sm">[{nestedArray.flat().join(", ")}]</p>
        </div>
      </section>

      {/* Mutable Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-orange-600">
          Mutable Methods (Modify Original)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Method</th>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-mono">push()</td>
                <td className="border p-2">Add to end</td>
                <td className="border p-2">
                  <button onClick={pushExample} className="btn-primary text-xs">
                    Push 10,11,12
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">pop()</td>
                <td className="border p-2">Remove from end</td>
                <td className="border p-2">
                  <button onClick={popExample} className="btn-danger text-xs">
                    Pop
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">shift()</td>
                <td className="border p-2">
                  Remove from start (slow for large arrays)
                </td>
                <td className="border p-2">
                  <button
                    onClick={shiftExample}
                    className="btn-warning text-xs"
                  >
                    Shift
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">unshift()</td>
                <td className="border p-2">Add to start</td>
                <td className="border p-2">
                  <button
                    onClick={unshiftExample}
                    className="btn-primary text-xs"
                  >
                    Unshift 0
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">splice()</td>
                <td className="border p-2">Add/remove at index</td>
                <td className="border p-2">
                  <button onClick={spliceExample} className="btn-info text-xs">
                    Insert 2.5, 2.75
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">sort()</td>
                <td className="border p-2">Sort in place</td>
                <td className="border p-2 space-x-1">
                  <button
                    onClick={sortAlphabetExample}
                    className="btn-secondary text-xs"
                  >
                    Sort Letters
                  </button>
                  <button
                    onClick={sortNumbersAsc}
                    className="btn-success text-xs"
                  >
                    Asc
                  </button>
                  <button
                    onClick={sortNumbersDesc}
                    className="btn-error text-xs"
                  >
                    Desc
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">reverse()</td>
                <td className="border p-2">Reverse in place</td>
                <td className="border p-2">
                  <button
                    onClick={reverseExample}
                    className="btn-warning text-xs"
                  >
                    Reverse
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">fill()</td>
                <td className="border p-2">Fill range with value</td>
                <td className="border p-2">
                  <button onClick={fillExample} className="btn-dark text-xs">
                    Fill 0 (2-5)
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">copyWithin()</td>
                <td className="border p-2">Copy range within array</td>
                <td className="border p-2">
                  <button
                    onClick={copyWithinExample}
                    className="btn-info text-xs"
                  >
                    Copy 3-5 to 0
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Immutable Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-green-600">
          Immutable Methods (Return New Array)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">#</th>
                <th className="border p-2 text-left">Method</th>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2 font-mono">map()</td>
                <td className="border p-2">Transform each element</td>
                <td className="border p-2">
                  <button onClick={mapExample} className="btn-primary text-xs">
                    x → x*2
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2 font-mono">filter()</td>
                <td className="border p-2">Keep elements matching condition</td>
                <td className="border p-2">
                  <button
                    onClick={filterExample}
                    className="btn-success text-xs"
                  >
                    Even Only
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">3</td>
                <td className="border p-2 font-mono">reduce()</td>
                <td className="border p-2">Reduce to single value</td>
                <td className="border p-2">
                  <button onClick={reduceExample} className="btn-info text-xs">
                    Sum All
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">4</td>
                <td className="border p-2 font-mono">slice()</td>
                <td className="border p-2">Shallow copy of portion</td>
                <td className="border p-2">
                  <button
                    onClick={sliceExample}
                    className="btn-secondary text-xs"
                  >
                    [2:6)
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">5</td>
                <td className="border p-2 font-mono">concat()</td>
                <td className="border p-2">Merge arrays</td>
                <td className="border p-2">
                  <button
                    onClick={concatExample}
                    className="btn-primary text-xs"
                  >
                    Merge All
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">6</td>
                <td className="border p-2 font-mono">...</td>
                <td className="border p-2">Spread to merge</td>
                <td className="border p-2">
                  <button
                    onClick={spreadExample}
                    className="btn-success text-xs"
                  >
                    Spread Merge
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">7</td>
                <td className="border p-2 font-mono">flat()</td>
                <td className="border p-2">Flatten nested arrays</td>
                <td className="border p-2">
                  <button onClick={flatExample} className="btn-warning text-xs">
                    Flatten
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">8</td>
                <td className="border p-2 font-mono">join()</td>
                <td className="border p-2">Convert to string</td>
                <td className="border p-2">
                  <button onClick={joinExample} className="btn-dark text-xs">
                    Join "-"
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">9</td>
                <td className="border p-2 font-mono">flatMap()</td>
                <td className="border p-2">Map + flatten</td>
                <td className="border p-2">
                  <button onClick={flatMapExample} className="btn-info text-xs">
                    [x, x*2]
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">10</td>
                <td className="border p-2 font-mono">find()</td>
                <td className="border p-2">First match</td>
                <td className="border p-2">
                  <button onClick={findExample} className="btn-success text-xs">
                    x > 6
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">11</td>
                <td className="border p-2 font-mono">findIndex()</td>
                <td className="border p-2">Index of first match</td>
                <td className="border p-2">
                  <button
                    onClick={findIndexExample}
                    className="btn-warning text-xs"
                  >
                    x > 7
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border p-2">12</td>
                <td className="border p-2 font-mono">indexOf()</td>
                <td className="border p-2">Exact value index</td>
                <td className="border p-2">
                  <button
                    onClick={indexOfExample}
                    className="btn-secondary text-xs"
                  >
                    Find 7
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modern Immutable Methods */}
      <section>
        <h2 className="text-2xl font-bold mb-3 text-purple-600">
          Modern Immutable Methods (ES2023+)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button onClick={toSortedExample} className="btn-primary">
            toSorted() → New Sorted Array
          </button>
          <button onClick={toReversedExample} className="btn-warning">
            toReversed() → New Reversed
          </button>
          <button onClick={toSplicedExample} className="btn-info">
            toSpliced(2,1,99) → Safe Splice
          </button>
        </div>
      </section>

      {/* Tailwind-style button classes */}
      <style jsx>{`
        .btn-primary {
          @apply px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition;
        }
        .btn-success {
          @apply px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700;
        }
        .btn-warning {
          @apply px-3 py-1 bg-yellow-600 text-white rounded text-xs hover:bg-yellow-700;
        }
        .btn-danger {
          @apply px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700;
        }
        .btn-info {
          @apply px-3 py-1 bg-cyan-600 text-white rounded text-xs hover:bg-cyan-700;
        }
        .btn-secondary {
          @apply px-3 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700;
        }
        .btn-dark {
          @apply px-3 py-1 bg-gray-800 text-white rounded text-xs hover:bg-gray-900;
        }
        .btn-error {
          @apply px-3 py-1 bg-pink-600 text-white rounded text-xs hover:bg-pink-700;
        }
      `}</style>
    </div>
  );
};

export default Transition(ArrayCocept);

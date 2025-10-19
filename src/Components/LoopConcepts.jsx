import { useState } from "react";
import { Play, RefreshCw } from "lucide-react";

const LoopConcepts = () => {
  const [activeTab, setActiveTab] = useState("for");
  const [output, setOutput] = useState([]);

  const examples = {
    for: {
      title: "For Loop",
      description:
        "Traditional loop with counter. Best for iterating a specific number of times.",
      code: `for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}`,
      execute: () => {
        const results = [];
        for (let i = 0; i < 5; i++) {
          results.push(`Iteration: ${i}`);
        }
        setOutput(results);
      },
    },
    forEach: {
      title: "forEach Method",
      description:
        "Array method that executes a function for each element. Cannot break or return early.",
      code: `const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});`,
      execute: () => {
        const fruits = ["apple", "banana", "cherry"];
        const results = [];
        fruits.forEach((fruit, index) => {
          results.push(`${index}: ${fruit}`);
        });
        setOutput(results);
      },
    },
    map: {
      title: "map Method",
      description:
        "Creates a new array by transforming each element. Returns a new array.",
      code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((num) => num * 2);
        setOutput([
          `Original: [${numbers.join(", ")}]`,
          `Doubled: [${doubled.join(", ")}]`,
        ]);
      },
    },
    while: {
      title: "While Loop",
      description:
        "Continues looping while condition is true. Check condition before each iteration.",
      code: `let count = 0;
while (count < 5) {
  console.log('Count:', count);
  count++;
}`,
      execute: () => {
        const results = [];
        let count = 0;
        while (count < 5) {
          results.push(`Count: ${count}`);
          count++;
        }
        setOutput(results);
      },
    },
    filter: {
      title: "filter Method",
      description:
        "Creates a new array with elements that pass a test. Returns filtered array.",
      code: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const evens = numbers.filter((num) => num % 2 === 0);
        setOutput([
          `Original: [${numbers.join(", ")}]`,
          `Even numbers: [${evens.join(", ")}]`,
        ]);
      },
    },
    reduce: {
      title: "reduce Method",
      description:
        "Reduces array to a single value by applying a function. Very powerful for calculations.",
      code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        setOutput([`Numbers: [${numbers.join(", ")}]`, `Sum: ${sum}`]);
      },
    },
  };

  const current = examples[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          JavaScript Loop Concepts
        </h1>
        <p className="text-gray-600 mb-8">
          Interactive guide to loops and array methods
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(examples).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setOutput([]);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === key
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {examples[key].title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {current.title}
          </h2>
          <p className="text-gray-600 mb-4">{current.description}</p>

          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-sm font-mono">{current.code}</pre>
          </div>

          <button
            onClick={current.execute}
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all font-medium"
          >
            <Play size={20} />
            Run Example
          </button>
        </div>

        {output.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw size={20} className="text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Output</h3>
            </div>
            <div className="bg-white rounded-lg p-4 font-mono text-sm">
              {output.map((line, i) => (
                <div key={i} className="text-gray-800 mb-1">
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-blue-800 mb-1">
                Use for/while when:
              </p>
              <p className="text-gray-700">
                You need fine control over iteration or early breaks
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-800 mb-1">Use map when:</p>
              <p className="text-gray-700">
                Transforming every element into a new array
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-800 mb-1">
                Use filter when:
              </p>
              <p className="text-gray-700">
                Selecting elements that meet a condition
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-800 mb-1">
                Use reduce when:
              </p>
              <p className="text-gray-700">
                Calculating a single value from an array
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoopConcepts;

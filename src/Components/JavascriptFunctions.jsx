import React, { useState } from "react";

const JavascriptFunctions = () => {
  const [activeTab, setActiveTab] = useState("higherOrder");
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const functionExamples = {
    higherOrder: {
      title: "Higher-Order Functions",
      description:
        "Functions that take other functions as arguments or return functions as results.",
      explanation:
        "Higher-order functions are a powerful concept in JavaScript. They enable functional programming patterns and code reusability.",
      useCase:
        "Great for callbacks, event handlers, array methods (map, filter, reduce)",
      tips: "Think of them as functions that operate on other functions!",
      code: `const higherOrderFunction = (cars, carAction) => {
  cars.forEach((car) => carAction(car));
};

const displayCar = (car) => {
  console.log(\`Car: \${car}\`);
};

const cars = ['BMW', 'Mercedes', 'Audi'];
higherOrderFunction(cars, displayCar);`,
      execute: () => {
        const results = [];
        const higherOrderFunction = (cars, carAction) => {
          cars.forEach((car) => carAction(car));
        };
        const displayCar = (car) => {
          results.push(`Car: ${car}`);
        };
        const cars = ["BMW", "Mercedes", "Audi"];
        higherOrderFunction(cars, displayCar);
        return results;
      },
      realWorld:
        "Used in event listeners, setTimeout, array methods like map/filter",
    },
    callback: {
      title: "Callback Functions",
      description: "Functions passed as arguments to be executed later.",
      explanation:
        "Callbacks are functions passed into another function as an argument, which is then invoked inside the outer function.",
      useCase: "Asynchronous operations, event handling, array iteration",
      tips: "Callbacks are the foundation of asynchronous JavaScript!",
      code: `const processUserData = (user, callback) => {
  console.log(\`Processing \${user}...\`);
  callback(\`\${user} processed!\`);
};

processUserData('Alice', (result) => {
  console.log(result);
});`,
      execute: () => {
        const results = [];
        const processUserData = (user, callback) => {
          results.push(`Processing ${user}...`);
          callback(`${user} processed!`);
        };
        processUserData("Alice", (result) => {
          results.push(result);
        });
        return results;
      },
      realWorld: "API calls, file reading, database queries, user interactions",
    },
    arrow: {
      title: "Arrow Functions",
      description:
        "Concise syntax for writing functions with lexical 'this' binding.",
      explanation:
        "Arrow functions provide a shorter syntax and don't have their own 'this' context.",
      useCase: "Short callbacks, array methods, when you need lexical 'this'",
      tips: "Arrow functions are great for one-liners and don't rebind 'this'!",
      code: `// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

// With array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log('Result:', addArrow(5, 3));
console.log('Doubled:', doubled);`,
      execute: () => {
        const results = [];
        const addArrow = (a, b) => a + b;
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((n) => n * 2);
        results.push(`Result: ${addArrow(5, 3)}`);
        results.push(`Doubled: [${doubled.join(", ")}]`);
        return results;
      },
      realWorld: "React components, event handlers, array transformations",
    },
    closure: {
      title: "Closures",
      description:
        "Functions that have access to variables from outer scope even after the outer function has returned.",
      explanation:
        "A closure gives you access to an outer function's scope from an inner function.",
      useCase: "Data privacy, factory functions, function generators",
      tips: "Closures remember their environment - like a backpack of variables!",
      code: `const createCounter = () => {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
};

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());   // 2`,
      execute: () => {
        const results = [];
        const createCounter = () => {
          let count = 0;
          return {
            increment: () => ++count,
            decrement: () => --count,
            getCount: () => count,
          };
        };
        const counter = createCounter();
        results.push(`Increment: ${counter.increment()}`);
        results.push(`Increment: ${counter.increment()}`);
        results.push(`Current Count: ${counter.getCount()}`);
        return results;
      },
      realWorld: "Private variables, module pattern, event handlers with state",
    },
    pure: {
      title: "Pure Functions",
      description:
        "Functions that always return the same output for the same input and have no side effects.",
      explanation:
        "Pure functions are predictable, testable, and easier to reason about.",
      useCase: "Functional programming, predictable behavior, easy testing",
      tips: "No side effects = easier to test and debug!",
      code: `// Pure function
const multiply = (a, b) => a * b;

// Impure function (modifies external state)
let total = 0;
const addToTotal = (n) => {
  total += n; // Side effect!
  return total;
};

console.log('Pure:', multiply(3, 4));
console.log('Pure:', multiply(3, 4)); // Same result`,
      execute: () => {
        const results = [];
        const multiply = (a, b) => a * b;
        results.push(`Pure function: ${multiply(3, 4)}`);
        results.push(`Called again: ${multiply(3, 4)}`);
        results.push(`Always same result ✓`);
        return results;
      },
      realWorld: "Redux reducers, utility functions, mathematical operations",
    },
    iife: {
      title: "IIFE (Immediately Invoked)",
      description:
        "Functions that are executed immediately after being defined.",
      explanation:
        "IIFE creates a private scope and executes immediately without polluting global scope.",
      useCase:
        "Module pattern, avoiding global scope pollution, initialization code",
      tips: "Great for one-time initialization and creating private scopes!",
      code: `// IIFE Pattern
(function() {
  const privateVar = 'I am private';
  console.log('IIFE executed!');
  console.log(privateVar);
})();

// Arrow IIFE
(() => {
  console.log('Arrow IIFE executed!');
})();

// IIFE with return value
const result = (() => {
  return 'Returned from IIFE';
})();

console.log(result);`,
      execute: () => {
        const results = [];
        (() => {
          const privateVar = "I am private";
          results.push("IIFE executed!");
          results.push(privateVar);
        })();

        (() => {
          results.push("Arrow IIFE executed!");
        })();

        const result = (() => {
          return "Returned from IIFE";
        })();

        results.push(result);
        return results;
      },
      realWorld:
        "Module initialization, jQuery plugins, avoiding variable conflicts",
    },
  };

  const current = functionExamples[activeTab];

  const handleExecute = async () => {
    setIsRunning(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    const results = current.execute();
    setOutput(results);
    setIsRunning(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(current.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3">
              <span className="text-4xl">📚</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3 flex-wrap">
                JavaScript Functions Masterclass
                <span className="text-2xl">✨</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Master different types of JavaScript functions with interactive
                examples
              </p>
              <div className="flex gap-2 flex-wrap mt-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                  6 Function Types
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Live Examples
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                  Real-World Use Cases
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 overflow-x-auto">
          <div className="flex flex-wrap gap-2">
            {Object.keys(functionExamples).map((key) => {
              const example = functionExamples[key];
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setOutput([]);
                  }}
                  className={`px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                    activeTab === key
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {example.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {current.title}
                </h2>
                <p className="text-gray-700 text-lg mb-3">
                  {current.description}
                </p>
                <p className="text-gray-600 mb-4">{current.explanation}</p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-3">
                  <p className="text-sm text-blue-900">
                    <strong>📌 Use Case:</strong> {current.useCase}
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-3">
                  <p className="text-sm text-yellow-900">
                    <strong>💡 Tip:</strong> {current.tips}
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
                  <p className="text-sm text-purple-900">
                    <strong>🌍 Real World:</strong> {current.realWorld}
                  </p>
                </div>
              </div>

              {/* Code Block */}
              <div className="relative mb-4">
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">
                    JavaScript
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs text-white transition-colors"
                  >
                    {copiedCode ? "✓ Copied!" : "📋 Copy"}
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto">
                  <pre className="text-sm font-mono">{current.code}</pre>
                </div>
              </div>

              {/* Execute Button */}
              <button
                onClick={handleExecute}
                disabled={isRunning}
                className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  isRunning
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl"
                } text-white w-full`}
              >
                {isRunning ? "⏳ Executing..." : "▶ Run Code"}
              </button>
            </div>

            {/* Output Section */}
            {output.length > 0 && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-green-500 rounded-full p-2">
                    <span className="text-white text-xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800">
                    Console Output
                  </h3>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm shadow-inner">
                  {output.map((line, i) => (
                    <div
                      key={i}
                      className="text-green-400 mb-1 flex items-start gap-2"
                    >
                      <span className="text-green-500 font-bold">&gt;</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Concepts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📚</span> Key Concepts
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-200">
                  <p className="font-semibold text-purple-800 mb-1">
                    First-Class Functions
                  </p>
                  <p className="text-gray-700">
                    Functions are treated as values
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-800 mb-1">
                    Function Expressions
                  </p>
                  <p className="text-gray-700">Functions stored in variables</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                  <p className="font-semibold text-green-800 mb-1">
                    Lexical Scope
                  </p>
                  <p className="text-gray-700">
                    Variables access determined by position
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-3 border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-1">
                    Function Composition
                  </p>
                  <p className="text-gray-700">Combining functions together</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-4 flex items-center gap-2">
                <span>💡</span> Quick Tips
              </h3>
              <ul className="space-y-2 text-sm text-yellow-900">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">→</span>
                  <span>Use arrow functions for short callbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">→</span>
                  <span>Prefer pure functions for predictability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">→</span>
                  <span>Use closures for data privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">→</span>
                  <span>Higher-order functions = reusable code</span>
                </li>
              </ul>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span>✓</span> Best Practices
              </h3>
              <ul className="space-y-2 text-sm text-indigo-900">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Keep functions small and focused</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Use descriptive function names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Avoid side effects when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Document complex functions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavascriptFunctions;

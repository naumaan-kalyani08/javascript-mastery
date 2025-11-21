import React, { useState, useEffect } from "react";
import {
  Play,
  RefreshCw,
  Code,
  Zap,
  BookOpen,
  Trophy,
  ChevronRight,
  Check,
  AlertCircle,
  Clock,
  TrendingUp,
} from "lucide-react";
import Transition from "../Layout/Transition";

const LoopConcepts = () => {
  const [activeTab, setActiveTab] = useState("for");
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState(0);
  const [completedExamples, setCompletedExamples] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const examples = {
    for: {
      title: "For Loop",
      icon: <Code size={20} />,
      category: "Traditional",
      difficulty: "Beginner",
      description:
        "Traditional loop with counter. Best for iterating a specific number of times.",
      useCase: "Use when you need precise control over iteration count",
      pros: ["Full control", "Can break early", "Performance optimized"],
      cons: ["More verbose", "Easy to make off-by-one errors"],
      code: `for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}`,
      execute: () => {
        const results = [];
        for (let i = 0; i < 5; i++) {
          results.push(`Iteration: ${i}`);
        }
        return results;
      },
    },
    forEach: {
      title: "forEach Method",
      icon: <Zap size={20} />,
      category: "Array Method",
      difficulty: "Beginner",
      description:
        "Array method that executes a function for each element. Cannot break or return early.",
      useCase: "Use for simple iteration when you don't need to break early",
      pros: ["Clean syntax", "Easy to read", "Access to index"],
      cons: ["Cannot break", "Cannot return", "No chaining"],
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
        return results;
      },
    },
    map: {
      title: "map Method",
      icon: <TrendingUp size={20} />,
      category: "Array Method",
      difficulty: "Beginner",
      description:
        "Creates a new array by transforming each element. Returns a new array.",
      useCase: "Use when transforming data from one form to another",
      pros: ["Immutable", "Chainable", "Returns new array"],
      cons: ["Creates new array", "Cannot skip elements"],
      code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((num) => num * 2);
        return [
          `Original: [${numbers.join(", ")}]`,
          `Doubled: [${doubled.join(", ")}]`,
        ];
      },
    },
    while: {
      title: "While Loop",
      icon: <RefreshCw size={20} />,
      category: "Traditional",
      difficulty: "Beginner",
      description:
        "Continues looping while condition is true. Check condition before each iteration.",
      useCase: "Use when you don't know how many iterations you need",
      pros: [
        "Flexible conditions",
        "Can break early",
        "Good for unknown iterations",
      ],
      cons: ["Risk of infinite loops", "Condition must be managed"],
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
        return results;
      },
    },
    filter: {
      title: "filter Method",
      icon: <AlertCircle size={20} />,
      category: "Array Method",
      difficulty: "Intermediate",
      description:
        "Creates a new array with elements that pass a test. Returns filtered array.",
      useCase: "Use when selecting elements based on a condition",
      pros: ["Immutable", "Chainable", "Clear intent"],
      cons: ["Creates new array", "Iterates all elements"],
      code: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const evens = numbers.filter((num) => num % 2 === 0);
        return [
          `Original: [${numbers.join(", ")}]`,
          `Even numbers: [${evens.join(", ")}]`,
        ];
      },
    },
    reduce: {
      title: "reduce Method",
      icon: <Trophy size={20} />,
      category: "Array Method",
      difficulty: "Advanced",
      description:
        "Reduces array to a single value by applying a function. Very powerful for calculations.",
      useCase: "Use when combining array elements into a single value",
      pros: ["Extremely flexible", "Can replace many operations", "Powerful"],
      cons: ["Complex syntax", "Harder to debug", "Learning curve"],
      code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return [`Numbers: [${numbers.join(", ")}]`, `Sum: ${sum}`];
      },
    },
    forOf: {
      title: "for...of Loop",
      icon: <ChevronRight size={20} />,
      category: "Modern",
      difficulty: "Beginner",
      description:
        "Modern way to iterate over iterable objects. Clean syntax with ability to break.",
      useCase: "Use for simple iteration with modern syntax",
      pros: ["Clean syntax", "Can break", "Works with iterables"],
      cons: ["No index access", "Not for objects"],
      code: `const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color);
}`,
      execute: () => {
        const colors = ["red", "green", "blue"];
        const results = [];
        for (const color of colors) {
          results.push(`Color: ${color}`);
        }
        return results;
      },
    },
    some: {
      title: "some Method",
      icon: <Check size={20} />,
      category: "Array Method",
      difficulty: "Intermediate",
      description:
        "Tests whether at least one element passes the test. Returns boolean.",
      useCase: "Use to check if any element meets a condition",
      pros: ["Short-circuits", "Clear intent", "Returns boolean"],
      cons: ["Only returns boolean", "No element access"],
      code: `const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even number:', hasEven);`,
      execute: () => {
        const numbers = [1, 2, 3, 4, 5];
        const hasEven = numbers.some((num) => num % 2 === 0);
        return [
          `Numbers: [${numbers.join(", ")}]`,
          `Has even number: ${hasEven}`,
        ];
      },
    },
  };

  const current = examples[activeTab];

  const handleExecute = async () => {
    setIsRunning(true);
    const startTime = performance.now();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const results = current.execute();
    setOutput(results);

    const endTime = performance.now();
    setExecutionTime((endTime - startTime).toFixed(2));
    setIsRunning(false);

    if (!completedExamples.includes(activeTab)) {
      setCompletedExamples([...completedExamples, activeTab]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-300";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Traditional":
        return "bg-blue-100 text-blue-700";
      case "Array Method":
        return "bg-purple-100 text-purple-700";
      case "Modern":
        return "bg-pink-100 text-pink-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const progress =
    (completedExamples.length / Object.keys(examples).length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <BookOpen className="text-purple-600" size={36} />
                JavaScript Loop Concepts
              </h1>
              <p className="text-gray-600 text-lg">
                Interactive guide to loops and array methods with examples
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="text-purple-600" size={20} />
                <span className="font-semibold text-gray-700">Progress</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 overflow-hidden mb-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">
                {completedExamples.length} of {Object.keys(examples).length}{" "}
                completed
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 overflow-x-auto">
          <div className="flex flex-wrap gap-2 min-w-max">
            {Object.keys(examples).map((key) => {
              const example = examples[key];
              const isCompleted = completedExamples.includes(key);
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setOutput([]);
                  }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                    activeTab === key
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {example.icon}
                  <span>{example.title}</span>
                  {isCompleted && (
                    <Check
                      size={16}
                      className={
                        activeTab === key ? "text-white" : "text-green-600"
                      }
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    {current.icon}
                    {current.title}
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        current.category
                      )}`}
                    >
                      {current.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                        current.difficulty
                      )}`}
                    >
                      {current.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-3 text-lg">
                {current.description}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                <p className="text-sm text-blue-900 flex items-start gap-2">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Use Case:</strong> {current.useCase}
                  </span>
                </p>
              </div>

              {/* Code Block */}
              <div className="relative mb-4">
                <div className="absolute top-3 right-3 bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">
                  JavaScript
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto">
                  <pre className="text-sm font-mono">{current.code}</pre>
                </div>
              </div>

              {/* Execute Button */}
              <button
                onClick={handleExecute}
                disabled={isRunning}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  isRunning
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
                } text-white w-full justify-center`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    Run Example
                  </>
                )}
              </button>
            </div>

            {/* Output Section */}
            {output.length > 0 && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg animate-fadeIn">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full p-2">
                      <Check size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800">Output</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 shadow">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {executionTime}ms
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 font-mono text-sm shadow-inner">
                  {output.map((line, i) => (
                    <div
                      key={i}
                      className="text-gray-800 mb-1 flex items-start gap-2"
                    >
                      <span className="text-green-600 font-bold">&gt;</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pros & Cons */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Pros & Cons
              </h3>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                  <Check size={16} />
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {current.pros.map((pro, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-0.5">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                  <AlertCircle size={16} />
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  {current.cons.map((con, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Quick Reference
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="font-semibold text-blue-800 mb-1">
                    for/while loops:
                  </p>
                  <p className="text-gray-700">Fine control, early breaks</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="font-semibold text-purple-800 mb-1">map:</p>
                  <p className="text-gray-700">Transform all elements</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="font-semibold text-pink-800 mb-1">filter:</p>
                  <p className="text-gray-700">Select by condition</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="font-semibold text-orange-800 mb-1">reduce:</p>
                  <p className="text-gray-700">Calculate single value</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Your Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Examples Tried</span>
                  <span className="font-bold text-purple-700">
                    {completedExamples.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Remaining</span>
                  <span className="font-bold text-gray-700">
                    {Object.keys(examples).length - completedExamples.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Last Execution</span>
                  <span className="font-bold text-gray-700">
                    {executionTime}ms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Transition(LoopConcepts);

import { useEffect, useState } from "react";
import { ChevronRight, AlertCircle, CheckCircle } from "lucide-react";
import Transition from "../Layout/Transition";

const ConditionConcept = () => {
  const [ResultData, setResultData] = useState(null);
  const [checkNumber, setCheckNumber] = useState("");
  const [grade, setGrade] = useState("");
  const [GradeResult, setGradeResult] = useState(null);
  const [votingEligibility, setvotingEligibility] = useState("");
  const [VoteResult, setVoteResult] = useState(null);
  const [ageGroup, setageGroup] = useState("");
  const [ageGroupResult, setageGroupResult] = useState("");
  const [DayWeek, setDayWeek] = useState("");
  const [DayWeekResult, setDayWeekResult] = useState(null);
  const [ApiResponse, setApiResponse] = useState("");

  const dataObject = {
    name: "john",
    age: 30,
    city: "New York",
  };

  const fetchUserLastName = () => {
    try {
      if (!dataObject.hasOwnProperty("last")) {
        throw new Error("Last name property is missing");
      }
      setApiResponse("An error occurred while fetching the last name.");
    } catch (error) {
      console.log("error", error);
      setApiResponse("An error occurred while fetching the last name.");
    }
  };

  const condtionforIF = () => {
    let a = 10;
    if (a > 5) {
      setResultData("Value is greater than 5");
    }
  };

  const checkTheNumber = () => {
    const num = Number(checkNumber);
    if (num === 0) {
      console.log("Number is 0");
    } else if (num < 0) {
      console.log("Number is negative");
    } else {
      console.log("Number is positive");
    }
  };

  const CheckTheGrade = () => {
    const marks = Number(grade);

    switch (true) {
      case marks >= 90:
        return setGradeResult("Your Grade is A+");
      case marks >= 80:
        return setGradeResult("Your Grade is A");
      case marks >= 70:
        return setGradeResult("Your Grade is B");
      case marks >= 60:
        return setGradeResult("Your Grade is C");
      case marks >= 50:
        return setGradeResult("Your Grade is D");
      case marks < 50:
        return setGradeResult("Your Grade is F");
      default:
        return setGradeResult("Invalid marks");
    }
  };
  const checkVotingEligibility = () => {
    let voteEligibleResult = votingEligibility;
    voteEligibleResult >= 18
      ? setVoteResult("You are eligible to vote")
      : setVoteResult("You are not Eligible to vote");
  };

  const getAgeGroup = () => {
    ageGroup >= 0 && ageGroup <= 12
      ? setageGroupResult("Child")
      : ageGroup >= 13 && ageGroup <= 19
      ? setageGroupResult("Teeenager")
      : ageGroup >= 20 && ageGroup <= 59
      ? setageGroupResult("Adult")
      : ageGroup >= 60
      ? setageGroupResult("Senior Citizen ")
      : setageGroupResult("Invalid Age");
  };

  const getDayOfWeek = () => {
    let dayNumber = Number(DayWeek);
    switch (dayNumber) {
      case 1:
        return setDayWeekResult("Sunday");
      case 2:
        return setDayWeekResult("Monday");
      case 3:
        return setDayWeekResult("Tuesday");
      case 4:
        return setDayWeekResult("Wednesday");
      case 5:
        return setDayWeekResult("Thursday");
      case 6:
        return setDayWeekResult("Friday");
      case 7:
        return setDayWeekResult("Saturday");
      default:
        return setDayWeekResult("Invalid day number");
    }
  };
  useEffect(() => {
    fetchUserLastName();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Conditional Statements in JavaScript
          </h1>
          <p className="text-xl text-gray-600">
            Master if, else, ternary operators, and switch statements with
            interactive examples
          </p>
        </div>

        {/* Concepts Table */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Concepts Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-500">
                  <th className="text-left py-3 px-4 font-bold text-blue-600">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-blue-600">
                    Purpose
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-blue-600">
                    Example Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-semibold text-gray-900">if</td>
                  <td className="py-4 px-4 text-gray-700">
                    Execute code if a condition is true
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Checking single condition
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    if else
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Choose between two code blocks
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Multiple conditions (2+)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    ternary operator
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Shorthand ? : for if else
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Quick conditional assignment
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    switch
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Cleaner code for multiple scenarios
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Many specific cases
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {ResultData && (
            <div className="mt-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-green-700 font-semibold">{ResultData}</p>
            </div>
          )}
        </div>

        {/* Practice Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Practice Exercises
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Exercise 1: Number Check */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Number Classification
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Check if a number is positive, negative, or zero using if-else
              </p>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Enter a number"
                  value={checkNumber}
                  onChange={(e) => setCheckNumber(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                />
                <button
                  onClick={checkTheNumber}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  Check Number
                </button>
              </div>
            </div>

            {/* Exercise 2: Grade Check */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Grade Calculator
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Convert percentage to letter grade using switch statement
              </p>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Enter percentage (0-100)"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                />
                <button
                  onClick={CheckTheGrade}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  Check Grade
                </button>
              </div>
              {GradeResult && (
                <div className="mt-4 flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <p className="text-purple-700 font-semibold">{GradeResult}</p>
                </div>
              )}
            </div>

            {/* Exercise 3: Voting Eligibility */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Voting Eligibility
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Check if age meets voting requirements using ternary operator
              </p>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Enter your age"
                  value={votingEligibility}
                  onChange={(e) => setvotingEligibility(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition"
                />
                <button
                  onClick={checkVotingEligibility}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  Check Eligibility
                </button>
              </div>
              {VoteResult && (
                <div className="mt-4 flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-green-700 font-semibold">{VoteResult}</p>
                </div>
              )}
            </div>

            {/* Exercise 4: Age Group */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Age Group Classifier
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Categorize age into groups using nested if-else
              </p>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Enter age"
                  value={ageGroup}
                  onChange={(e) => setageGroup(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition"
                />
                <button
                  onClick={getAgeGroup}
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700 transition flex items-center justify-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  Get Age Group
                </button>
              </div>
              {ageGroupResult && (
                <div className="mt-4 flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <p className="text-yellow-700 font-semibold">
                    You are: {ageGroupResult}
                  </p>
                </div>
              )}
            </div>

            {/* Exercise 5: Day of Week */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  5
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Day of Week Converter
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Convert number (1-7) to day name using switch statement
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="number"
                  placeholder="Enter day number (1-7)"
                  value={DayWeek}
                  onChange={(e) => setDayWeek(e.target.value)}
                  className="md:col-span-2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition"
                />
                <button
                  onClick={getDayOfWeek}
                  className="bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  Get Day
                </button>
              </div>
              {DayWeekResult && (
                <div className="mt-4 flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 font-semibold">
                    The day is: {DayWeekResult}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* API Error Section */}
        {ApiResponse && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <p className="text-orange-700 font-semibold">{ApiResponse}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transition(ConditionConcept);

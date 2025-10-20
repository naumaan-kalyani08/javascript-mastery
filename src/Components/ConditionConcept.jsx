import { useEffect, useState } from "react";
const ConditionConcept = () => {
  const [ResultData, setResultData] = useState(null);
  const [checkNumber, setCheckNumber] = useState("");
  const [grade, setGrade] = useState(""); // input value
  const [GradeResult, setGradeResult] = useState(null);
  const [votingEligibility, setvotingEligibility] = useState(null);
  const [VoteResult, setVoteResult] = useState(null);

  const [ageGroup, setageGroup] = useState("");
  const [ageGroupResult, setageGroupResult] = useState("");

  const [DayWeek, setDayWeek] = useState(null);
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
      console.log(lastName);
      setApiResponse("Last Name is " + lastName);
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
    <div className="condition-conept-wrapper">
      <div className="condition-conept-container">
        <div className="condition-concept">
          <h1>Conditional Rendering in JavaScript</h1>
          <p>Several approaches exist in JavaScript, including:</p>
          <table border={1} cellPadding={10} cellSpacing={0} width="100%">
            <thead>
              <tr>
                <th width="16%">Type</th>
                <th width="84%">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>if</td>
                <td>Used when there are 2 conditions</td>
                <td>
                  <button onClick={condtionforIF}>Click</button>
                </td>
              </tr>
              <tr>
                <td>if else</td>
                <td>Used when more than 2 conditions exist</td>
              </tr>
              <tr>
                <td>ternary operator</td>
                <td>Shorthand ? : for if else</td>
              </tr>
              <tr>
                <td>switch</td>
                <td>Cleaner code for multiple scenarios</td>
              </tr>
            </tbody>
          </table>
          {ResultData && <p>{ResultData}</p>}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Condition Practice
        </h2>

        {/* Number check */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3>Check if Number is Positive/Negative/Zero</h3>
          <input
            type="text"
            placeholder="Enter number"
            value={checkNumber}
            onChange={(e) => setCheckNumber(e.target.value)}
          />
          <button onClick={checkTheNumber}>Check</button>
        </div>

        {/* Grade check */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3>Check the Grade</h3>
          <input
            type="text"
            placeholder="Enter the percentage"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <button onClick={CheckTheGrade}>Check Grade</button>
          {GradeResult && <div>{GradeResult}</div>}
        </div>

        <div className="">
          {" "}
          vote eligiblity
          <span>
            <label htmlFor="">Enter the Age</label>
            <input
              type="nuber"
              value={votingEligibility}
              onChange={(e) => setvotingEligibility(e.target.value)}
            />
            <button onClick={checkVotingEligibility}> Submit </button>
            {VoteResult && <span>{VoteResult} </span>}
          </span>
        </div>
        <div className="">
          <label htmlFor="">age group checker</label>
          <input
            type="number"
            value={ageGroup}
            onChange={(e) => setageGroup(e.target.value)}
          />
          <button onClick={getAgeGroup}> submit age</button>
          {ageGroupResult && <span>{ageGroupResult} </span>}
        </div>

        <div className="">
          day of the week
          <span>
            <label htmlFor="">enter the day number</label>
            <input
              type="number"
              value={DayWeek}
              onChange={(e) => setDayWeek(e.target.value)}
            />
            <div className="">the day is {DayWeekResult}</div>
            <button onClick={getDayOfWeek}>Submit</button>
          </span>
        </div>

        <div className="">{ApiResponse}</div>
      </div>
    </div>
  );
};

export default ConditionConcept;

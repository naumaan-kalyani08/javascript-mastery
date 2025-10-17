import { useState } from "react";

const ConditionConcept = () => {
  const [ResultData, setResultData] = useState("");
  const condtionforIF = () => {
    let a = 10;
    if (a > 5) {
      setResultData("Value is greater than 5");
    }
  };
  return (
    <div className="condition-conept-wrapper">
      <div className="condition-conept-container">
        <div className="condition-concept">
          <h1>Conditional Rendering in </h1>
          <p>
            There are several approaches that do exists in javascript and which
            all are mentioned below
          </p>
          <table border={1} cellPadding={10} cellSpacing={0} width="100%">
            <tr>
              <th width="16%">type</th>
              <th width="84%">Purpose</th>
            </tr>
            <tr>
              <td>if</td>
              <td>when there are 2 condition exists </td>
              <td>
                <button onClick={condtionforIF}>Click</button>
              </td>
            </tr>
            <tr>
              <td> if else</td>
              <td>when more than 2 conditions do exists</td>
            </tr>
            <tr>
              <td>ternary operater (short hand properties)</td>
              <td>shorthand properties ? : that are used for if else</td>
            </tr>
            <tr>
              <td> switch</td>
              <td>
                same but it keeps the code simple clean for muliple scenario
              </td>
            </tr>
          </table>
          {ResultData};
        </div>
      </div>
    </div>
  );
};

export default ConditionConcept;

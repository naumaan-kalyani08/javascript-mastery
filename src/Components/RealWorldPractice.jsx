import { useEffect, useState } from "react";
import Transition from "../Layout/Transition";

const RealWorldPractice = () => {
  const [Names, setNames] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // .then((users) => {
      //   const names = users.map((user) => user.name);
      //   setNames(names);
      // });
      .then((data) => setNames(data));
  }, []);
  return (
    <div>
      {Names.map((user) => (
        <div key={user.id}>
          <p>name {user.name} </p>
          <p>email {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Transition(RealWorldPractice);

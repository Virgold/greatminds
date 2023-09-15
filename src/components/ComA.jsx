import React, { useContext } from "react";
import { NameContext } from "../App";

function ComA() {
  const { name, setName, toggle, setToggle } = useContext(NameContext);


  
  const handleChange = () => {
    if (toggle === true) {
      setName((prev) => ({
        ...prev,
        fname: "John",
        lname: "Doe",
        email: "johndoe@hotmail.com",
      }));
    } else {
      setName();
    }
  };


  return (
    <div className="space-y-5">
      <div className="flex gap-10">
        <h1>{name.fname}</h1>
        <span>
          <h1> {name.lname}</h1>
        </span>
      </div>
      <h3>{name.email}</h3>
      <button onClick={handleChange}>Change</button>
    </div>
  );
}

export default ComA;

// <NameContext.Consumer>
//     {(zuby) => {
//         return (
//             <div>
//                 <h1>{zuby}</h1>
//             </div>
//         )
//     }}
// </NameContext.Consumer>

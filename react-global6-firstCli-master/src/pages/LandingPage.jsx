import React, { useState } from "react";
import EventListener from "../components/EventListener";

export const ModalPage = (props) => {
  const [state, setState] = useState(true);
  function handleClick() {
    setState(!state);
  }

  return (
    <>
      <div>
        {state && <p className="text-center text-red-600">Modal is here</p>}
        <button
          onClick={handleClick}
          className="mt-4 bg-slate-500  text-white py-2 px-4"
        >
          {state ? "Hide modal" : "show modal"}
        </button>
        <h2>name: {props.name}</h2>
        <p>age is: {props.age}</p>
      </div>
      {/* Heloo there */}
    </>
  );
};

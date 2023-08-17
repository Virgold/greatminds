import React from "react";

const Button = ({ HandleProfile }) => {
  return (
    <>
      <button className="text-gray-300 bg-red-900 rounded-full text-sm px-3 py-1" onClick={HandleProfile}>
        Contact
      </button>
    </>
  );
};

export default Button;

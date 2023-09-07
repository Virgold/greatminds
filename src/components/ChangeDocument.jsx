import React, { useEffect } from "react";
import { useState } from "react";

const ChangeDocument = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  fetch

  useEffect(
    function () {
      document.title = `${title}`;
    },
    [title]
  );

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  console.log(title);

  return (
    <>
      <input
        type="text"
        value={title}
        name="title"
        className="border"
        onChange={handleTitle}
        // {(event) => setTitle(event.target.value)}
      />

      <button onClick={() => setCount(count + 1)}> Page {count}</button>
    </>
  );
};

export default ChangeDocument;

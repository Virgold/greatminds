import React, { useState } from "react";

export default function ButtonModal(props) {
  const [state, setState] = useState(true);
  // const [age, setAge] = useState(0)
  // const [task, setTask] = useState(["Task 1",])
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    password: "",
    gender: "",
    required: true,
  });

  console.log(formData);

  // const HandleModal = () => {
  //   setState((prevState) => !prevState);
  // };

  // function handleAge() {
  //   setAge((prevAge) => prevAge + 1);
  // }

  // const HandleTask = () => {
  //   setTask((formerTask) => [...formerTask, ` Task ${formerTask.length + 1}`]);
  //   console.log(task);
  // };

  const HandleForm = (event) => {
    // console.log(event.target.value);
    const { name, type, value } = event.target;
    console.log(name);
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? !prevData.required : value,
        // []: event.target.value
      };
    });
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-2 items-center border mx-auto p-2 w-full">
      <h1 className="text-center mb-4">Sign Up </h1>
      {/* {state && <p className="modal text-red-500">{age}</p>} */}
      {/* <button className="bg-slate-200" onClick={HandleModal}>{state ? "x" : "open"}</button> */}
      {/* <button className="bg-red-200" onClick={HandleModal}>prev</button>
            <p>I am {age} years old today </p>
            <button className="bg-green-200" onClick={handleAge}>next</button> */}
      {/* <h2>name</h2>
            <p>Stack</p>
             */}
      {/* <button className="bg-green-200" onClick={HandleTask}>+</button> */}
      <input
        type="text"
        value={formData.fname}
        name="fname"
        placeholder="firstName"
        className="border formInput"
        onChange={HandleForm}
      />

      <input
        type="email"
        value={formData.email}
        name="email"
        placeholder="User Email"
        className="border formInput"
        onChange={HandleForm}
      />

      <input
        type="password"
        value={formData.password}
        name="password"
        placeholder="Enter Password..."
        className="border formInput"
        onChange={HandleForm}
      />

      <legend>YOUR GENDER</legend>
      <label htmlFor="male">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={formData.gender === "male"}
          onChange={HandleForm}
        />
        <span className="mx-2">male</span>
      </label>

      <label htmlFor="female">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={formData.gender === "female"}
          onChange={HandleForm}
        />
        <span className="mx-2">female</span>
      </label>
      <label htmlFor="others">
        <input
          type="radio"
          name="gender"
          id="others"
          value="others"
          checked={formData.gender === "others"}
          onChange={HandleForm}
        />
        <span className="mx-2">others ...</span>
      </label>
      <label htmlFor="required">
        <input
          type="checkbox"
          name="required"
          id="required"
          value="required"
          checked={formData.required}
          onChange={HandleForm}
        />
        <span className="mx-2"> Terms & conditions</span>
      </label>
      <div onSubmit={null} className="items-center flex w-full justify-center">
        <button>Sign Up</button>
      </div>

      {/* <br /> */}
      {/* <p className="text-start">
          My first Name is {formData.fname} and my Last name {formData.lname}
        </p> */}
    </div>
  );
}

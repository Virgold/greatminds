import React, { useState } from "react";


export default function ButtonModal(props) {

    const [state, setState] = useState(true)
    const [age, setAge] = useState(0)
    const [task, setTask] = useState(["Task 1",])
    const [formData, setFormData] = useState({
        input1: "",
        input2: "",
        gender: ""
    });

    console.log(formData);

    const HandleModal = () => {
        setState((prevSate) => !prevSate)
    }

    function handleAge() {
        setAge(prevAge => prevAge + 1)
    }
    // console.log(task);

    const HandleTask = () => {

        setTask(formerTask => [...formerTask, ` Task ${formerTask.length + 1}`])
        console.log(task);
    }


    const HandleForm = (event) => {
        // console.log(event.target.name);
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
                // []: event.target.value

            }
        })
        console.log(formData);
    }




    return (
        <div className="flex flex-col gap-2 items-start border mx-auto p-2">
            {/* {state && <p className="modal text-red-500">{age}</p>} */}
            {/* <button className="bg-slate-200" onClick={HandleModal}>{state ? "x" : "open"}</button> */}
            {/* <button className="bg-red-200" onClick={HandleModal}>prev</button>
            <p>I am {age} years old today </p>
            <button className="bg-green-200" onClick={handleAge}>next</button> */}
            {/* <h2>name</h2>
            <p>Stack</p>
             */}
            {/* <button className="bg-green-200" onClick={HandleTask}>+</button> */}
            <input type="text" value={formData.input1} name="input1" placeholder="firstName" className="border formInput" onChange={HandleForm} />
            <input type="text" value={formData.input2} name="input2" placeholder="lastName" className="border formInput" onChange={HandleForm} />

            <legend>YOUR GENDER</legend>
            <label htmlFor="male">
                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={HandleForm} />
                <span className="mx-2">male</span>
            </label>
            <label htmlFor="fmale">
                <input type="radio" name="gender" id="fmale" value="female" checked={formData.gender === "female"}
                    onChange={HandleForm} />
                <span className="mx-2">female</span>
            </label>
            <label htmlFor="others">
                <input type="radio" name="gender" id="others" value="others" checked={formData.gender === "others"}
                    onChange={HandleForm} />
                <span className="mx-2">others...</span>
            </label>

            <br />
            <p className="text-start">My first Name is {formData.input1} and my Last name {formData.input2}</p>

        </div>
    )
}


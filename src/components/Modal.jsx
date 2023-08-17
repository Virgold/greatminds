import React, { useState } from "react";


export default function ButtonModal(props) {

    const [state, setState] = useState(true)
    const [age, setAge] = useState(0)
    const [task, setTask] = useState(["Task 1",])
    const [formData, setFormData] = useState({
        fname: "",
        lname: ""
    });



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
        console.log(event.target.name);
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
                // []: event.target.value

            }
        })
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
            <input type="text" value={formData.fname} name="fname" placeholder="firstName" className="border formInput" onChange={HandleForm} />
            <input type="text" value={formData.lname} name="lname" placeholder="lastName" className="border formInput" onChange={HandleForm} />
            <br />
            <p className="text-start">My first Name is {formData.fname} and my Last name {formData.lname}</p>

        </div>
    )
}


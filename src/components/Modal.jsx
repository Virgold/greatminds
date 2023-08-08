import React, { useState } from "react";


export default function ButtonModal(props) {

    const [state, setState] = useState(true)
    const [oldAge, setOldAge] = useState(5)
    const [newAge, setNewAge] = useState(0)

    const HandleModal = () => {
        setState((prevSate) => !prevSate)
        setNewAge((prevAge) => prevAge = oldAge * 2)
        console.log(state, newAge);
    }


    return (
        <div className="flex items-center mx-auto">
            {state && <p className="modal text-red-500">SHOW MODAL</p>}
            <button className="bg-slate-200" onClick={HandleModal}>set</button>
            <p>I am {oldAge} years old today, tomorrow I'll be {newAge} </p>
        </div>
    )
}


import React, { useState } from "react";
import { useEffect } from "react";


export default function ButtonModal(props) {



    const [state, setState] = useState(true)
    const [age, setAge] = useState(0)
    const [task, setTask] = useState(["Task 1",])

    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        password: "",
        gender: "",
        required: true
    });
    const [error, setError] = useState({
        invalidFname: "",
        invalidEmail: "",
        invalidPassword: ""
    })



    const HandleModal = () => {
        setState(prevState => !prevState)
    }



    function handleAge() {
        setAge(prevAge => prevAge + 1)
    }



    const HandleTask = () => {

        setTask(formerTask => [...formerTask, ` Task ${formerTask.length + 1}`])
        console.log(task);
    }




    const HandleForm = (event) => {
        const { name, type, value } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? !prevData.required : value
            }
        })

        // setError(prevError => {
        //     return {
        //         ...prevError,
        //         invalidFname: "",
        //         invalidEmail: "",
        //         invalidPassword: ""

        //     }
        // })

    }
    useEffect(() => {
        console.log("effect called");
        setError(prevError => {
            return {
                ...prevError,
                invalidFname: "",
                invalidEmail: "",
                invalidPassword: ""
            }
        })

    }, [formData])

    const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const validEmail = emailFormat.test(formData.email)

    const handleSubmit = () => {
        if ((formData.email === "") && (formData.password === "")) {
            setError(prevError => {
                return {
                    ...prevError,
                    invalidEmail: "Email required",
                    invalidPassword: "Password required"
                }
            })
        }
        else if (!(formData.email === "") && (formData.password === "")) {
          
                setError(prevError => {
                    return {
                        ...prevError,
                        // invalidEmail: "",
                        invalidPassword: "Password required"
                    }
                })
        
        }
        else if ((formData.email === "") && !(formData.password === "")) {
          
            setError(prevError => {
                return {
                    ...prevError,
                    invalidEmail: "Email required",
                    // invalidPassword: ""
                }
            })
    
    }

    }




    return (
        <div className="flex flex-col gap-2 items-start border mx-auto p-2">

            <input type="text" value={formData.fname} name="fname" placeholder="firstName" className="border formInput" onChange={HandleForm} />
            <span>{error.invalidFname}</span>

            <input type="email" value={formData.email} name="email" placeholder="User Email" className="border formInput" onChange={HandleForm} />
<<<<<<< HEAD
            <span>{error.invalidEmail}</span>

=======
n
>>>>>>> origin/master
            <input type="password" value={formData.password} name="password" placeholder="Enter Password..." className="border formInput" onChange={HandleForm} />
            <span>{error.invalidPassword}</span>

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
            <br />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}


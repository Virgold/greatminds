import React, { useState } from "react";
import Button from "./Button";
import image from '../assets/images/Elvis.jpg'
import joy from '../assets//images/Joy.jpg'

const Cards = () => {
    // const { img, names, email, state } = props;
    const [profile, setProfile] = useState({
        img: joy,
        name: "Joy",
        email: "JoyEdem@gamil.com",
        state: "Aks"
    })


    function HandleProfile() {
        setProfile(prevProfile => {
            return {
                ...prevProfile,
                img: image,
                name: "Zuby",
                email: "Zuby@gamil.com",
                state: "ABia"

            }
        })

    }
    return (
        // <div className="lg:w-80%">
        <div className="flex flex-col  w-[90%]  h-[19rem] items-center gap-5 shadow-md border-2 py-4  hover:scale-105 transition">
            <img
                src={profile.img}
                alt=""
                className="w-[120px] h-[120px] object-cover rounded-full"
            />
            <div className="flex flex-col items-center gap-1">
                <h2 className="font-bold text-2xl">{profile.name}</h2>
                <h5 className="font-bold text-md">{profile.email}</h5>
                <p>{profile.state}</p>
                <Button HandleProfile={HandleProfile} />
            </div>
        </div>
        // </div>
    );
};

export default Cards;

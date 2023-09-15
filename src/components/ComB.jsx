import React, { useContext, useState } from 'react';
import { NameContext } from '../App';

function ComB() {
    const name = ""
    const { formData, setFormData } = useContext(NameContext)

    return (
        <>
            <h1>{formData.fname}</h1>
            <button onClick={() => setFormData(prev => {
                return(
                    {...prev,
                    fname: "hey"}
                )
            })}>Change Name</button>
        </>
    )
}

export default ComB
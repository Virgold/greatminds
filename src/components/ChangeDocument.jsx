import React, { Children, useEffect } from 'react';
import { useState } from 'react';


const ChangeDocument = (props) => {

    // const [title, setTitle] = useState("")
    // const [count, setCount] = useState(0)



    // useEffect(function () {
    //     document.title = `${title}`
    // }, [title])

    console.log(props);

    return (
        <>
            <div style={{color: `${props.color}`}}>{props.children}</div>
            {/* <input type="text" value={title} name="title" className="border" onChange={(event) => setTitle(event.target.value)} />

            <button onClick={() => setCount(count + 1)}> Page {count}</button> */}
        </>
    )
}

export default ChangeDocument
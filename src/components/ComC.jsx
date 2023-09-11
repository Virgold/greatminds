import React from 'react';
import { NameContext } from '../App';


function ComC() {

    return (
        <NameContext.Consumer>
            {(value) => {
                return <div>{value}</div>
            }}
        </NameContext.Consumer>
    );
}

export default ComC;

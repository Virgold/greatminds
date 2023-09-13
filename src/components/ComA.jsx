import React from 'react';
import { NameContext } from '../App';

function ComA() {
    return (
        <NameContext.Consumer>
            {(zuby) => {
                return (
                    <div>
                        <h1>{zuby}</h1>
                    </div>
                )
            }}
        </NameContext.Consumer>
    );
}

export default ComA;

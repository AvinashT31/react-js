import React, { useReducer } from "react";

function reducer(state, action) {
    console.log(state, "state");
    console.log(action, "action");
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    throw Error('unknown action');
}


export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });
    console.log(state, "state", dispatch, "dispatch");

    return (
        <div>
            <button onClick={() => { dispatch({ type: 'incremented_age' }) }}>Increment Age</button>
            <p>Hellov ! you are {state.age}</p>
        </div>
    )
}

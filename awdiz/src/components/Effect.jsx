 import { useState } from "react";
import { useEffect } from "react";

const Effect = () =>{

const [number, setNumber] = useState(0);
const [number2, setNumber2] = useState(0);

// useEffect (() => {alert("working!")});
//Will execute the code on every render

useEffect (() => {alert("will execute the code very frst time")}, []);
// will execute the code only very first time

// useEffect (() => {alert("will execute the code when state change")}, [number]);
//will execute the code very first time & when the specific state will change

// useEffect (() => {alert("for multiple state")}, [number, number2]);
//will execute the code very first time & or multiple state that we passed  


    return(
        <div>
            <h1>Number - {number}</h1>
            <h1>Number 1 - {number2}</h1>
            <button onClick={() => setNumber(number +1)}>click</button>
            <button onClick={() => setNumber2(number2 +1)}>click for 1</button>
        </div>
    )
}
export default Effect;



// function Effect() {

//        const [number, setNumber] = useState(0);
//        const [number2, setNumber2] = useState(0);


//     return (
//         <div>
//             <h1>Number</h1>
//             <h1>Number1</h1>
//             <button onClick={setNumber(number + 1)}>Click here</button>
//             <button onClick={setNumber2(number2 + 1)}>Click here</button>

//         </div>

//     )
// }
// export default Effect;
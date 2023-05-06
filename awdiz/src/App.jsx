import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { useState } from "react"

// import Register from "./components/Register"
// import Effect from "./components/Effect";
import Home from "./components/Home"
// import { Route } from "react-router-dom";
// import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Slide from "./components/Slide";
import Callback from "./components/Callback";
import Navbar1 from "./components/Navbar1";
import Reducer from "./components/Reducer";



function App() {

//   const [userName, setuserName] = useState("Avinash");
//   const [userEmail, setuserEmail] = useState("abc@gmail.com");
//   const [userNumber, setuserNumber] = useState("12345678")


  // const [name, setName] = useState(0);

  // function increment() {

  //   setName(name + 1)
  // }

  // function decrement() {
  //   setName(name - 1);
  // }

  return (

    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
       {/* <Route exact path = "/register" element={<Register/>} />
        <Route exact path = "/navbar" element={<Navbar/>} />   
        <Route exact path ="/login" element={<Login/>} />  
        <Route exact path="/effect" element={<Effect/>} /> */}
        <Route exact path="/test" element={<Test/>} /> 
        <Route exact path="/slide" element={<Slide/>} /> 
        <Route exact path="/callback" element={<Callback/>} />
        <Route exact path="/navbar1" element={<Navbar/>} />
        <Route exact path="/reducer" element={<Reducer/>} />
        {/* <Navbar/>
      Welcome to home page

      <h1>Initial value {name} </h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <Footer/> */}
        {/* <Register/> */}
        {/* <Effect/> */}
        {/* {<test/>} */}
     </Routes>
    
    {/* <Home userData={userName} userEmail={userEmail} userNumber ={userNumber} /> */}

    </div >
   
  );
}

export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react"

import Register from "./components/Register"
import Effect from "./components/Effect";
import Home from "./components/Home"
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";




function App() {

  const [name, setName] = useState(0);

  function increment() {

    setName(name + 1)
  }

  function decrement() {
    setName(name - 1);
  }

  return (

    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path = "/register" element={<Register/>} />
        <Route exact path = "/navbar" element={<Navbar/>} />   
        <Route exact path ="/login" element={<Login/>} />  
        <Route exact path="/effect" element={<Effect/>} />   
        {/* <Navbar/>
      Welcome to home page

      <h1>Initial value {name} </h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <Footer/> */}
        {/* <Register/> */}
        {/* <Effect/> */}
    </Routes>
    </div >
   
  );
}

export default App;

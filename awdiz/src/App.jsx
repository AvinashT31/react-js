import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react"

import Register from "./components/Register"
import Effect from "./components/Effect";



function App() {

  const [name, setName ] = useState(0);

  function increment(){
    
      setName(name+1)
    } 
    
  function decrement(){
    setName(name-1);
  }

  return (
    <div className="App">
      {/* <Navbar/>
      Welcome to home page

      <h1>Initial value {name} </h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <Footer/> */}
      {/* <Register/> */}
      <Effect/>
      
    </div>
  );
}

export default App;

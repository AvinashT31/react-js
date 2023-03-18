 import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const [userData, setuserData] = useState({name: "", email: "", password: ""});
  console.log(userData, "userData");
  
  const router = useNavigate();

   function clickHandle(e){
   
     e.preventDefault();
    //   alert(userData);
    var DataFromLS = JSON.parse(localStorage.getItem("userForReact")) || [];
    DataFromLS.push(userData);
    localStorage.setItem("userForReact", JSON.stringify(DataFromLS));
    setuserData({name: "", email: "", password: ""});
    router ("/login");
    alert("registration done");
    

   }

   function handle(e){

    e.preventDefault();
    // console.log(e);
    var name = e.target.name;
    var value = e.target.value;
    // console.log(e.target.name, e.target.value);
    setuserData({...userData, [name]: value})
   }
   



    return (
        <div>
            <form onSubmit={(e) => clickHandle(e)}>
                <label>Enter your Name</label>
                <br />
                <input onChange={(e) => handle(e)} name="name" value={userData.name} type="text" placeholder="Enter your Name" />
                <br />
                <label>Enter your Email</label>
                <br />
                <input onChange={(e) => handle(e)} name="email" value={userData.email} type="email" placeholder="Enter your Email" />
                <br />
                <label>Enter your Password</label>
                <br />
                <input onChange={(e) =>handle(e)} name="password" value={userData.password} type="password" placeholder="Enter your Password" />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register;
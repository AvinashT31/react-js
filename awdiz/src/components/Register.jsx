import { useState } from "react";

function Register() {

  const [userData, setuserData] = useState({name: "", email: "", password: ""});
  console.log(userData, "userData");

   function clickHandle(e){
    // alert("working");
     e.preventDefault();

   }

   function handle(e){

    e.preventDefault();
    console.log(e);
    setuserData(e.target.name);
   }
   



    return (
        <div>
            <form onSubmit={(e) => clickHandle(e)}>
                <label>Enter your Name</label>
                <br />
                <input onChange={(e) => handle(e)} name="userName" value={name} type="text" placeholder="Enter your Name" />
                <br />
                <label>Enter your Email</label>
                <br />
                <input onChange={(e) => handle(e)} name="userEmail" value={email} type="email" placeholder="Enter your Email" />
                <br />
                <label>Enter your Password</label>
                <br />
                <input onChange={(e) =>handle(e)} name="userPassword" value={password} type="password" placeholder="Enter your Password" />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register;
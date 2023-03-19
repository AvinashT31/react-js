import { useState } from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){

const [data, setdata] = useState({email: "", password: "" });
console.log(data, "data"); 

var route = useNavigate();

function handle(e){
    //  e.preventDefault();

    //  alert("woerking");
     
    var DataFromLS = JSON.parse(localStorage.getItem("userForReact"));
    // console.log(DataFromLS, "DataFromLS")

    var flag = false;

    for(var i=0; i<DataFromLS.length; i++){
        if(DataFromLS[i].email === data.email && DataFromLS[i].password === data.password){
            flag=true;
        }
    }
    if(flag){
        localStorage.setItem("userInfo", JSON.stringify(DataFromLS))
        setdata({email: "", password: "" });
        route ("/effect");
        alert("login done");

    }
    else{
        alert("please check your email")
    }
}

function clickhandle(e){

    e.preventDefault();
    var name =  e.target.name;
    var value = e.target.value;
    // console.log(e.target.name, e.target.value);
    setdata({...data ,[name]: value});
}

return(
    <div>
        <form onSubmit={(e) => handle(e)}>
            <input onChange={clickhandle} name="email" type="text" placeholder="Enter your Email" />
            <br />
            <input onChange={clickhandle} name="password" type="text" placeholder="Enter Your Password" />
            <br />
            <input type="submit" />

        </form>
    </div>
)

}
export default Login;
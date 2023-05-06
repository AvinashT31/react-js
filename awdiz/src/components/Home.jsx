import { useEffect, useState} from "react";
import Navbar from "./Navbar";

function Home({userData, userEmail, userNumber}){

    const[userDataHome, setuserDataHome ] = useState();
    const[userDataEmail, setuserDataEmail ] = useState();



    useEffect(() => {
        // console.log(userData, "userData here")
        setuserDataHome(userData)
        setuserDataEmail(userEmail)
    }, [userData, userEmail])

return(
    <div>
        <Navbar userData= {userData} userEmail= {userEmail} userNumber={userNumber}/>
        <h1>Hello - {userDataHome}</h1>
        your Email address is - {userDataEmail}
    </div>
)
}
export default Home;
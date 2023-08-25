import { useState } from "react";

function Signup(){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    console.log(name,email,pass);
    return(
        <div>
            <div className="signup">
            <h1>Sign-Up</h1>
            <input className="inputBox" type="text" placeholder="Enter Your Name "
             value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input className="inputBox" type="text" placeholder="Enter Your Email "
            value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input className="inputBox" type="password" placeholder="Enter Your password "
            value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
            <button className="signupbtn">Signup</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}

export default Signup;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate=useNavigate();

    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    
    const collectData= async ()=>{
        console.log(name,email,pass);
        let result= await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,pass}),
            headers:{
                'content-type':'application/json'
            },
        });
        result=await result.json();
        console.warn(result);
        if(result){
            navigate('/');
        }

    }
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
            <button onClick={collectData} className="signupbtn" >Signup</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}

export default Signup;
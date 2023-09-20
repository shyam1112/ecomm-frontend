import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    })
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    const loginData= async ()=>{
        // console.warn(email,pass);
        let result= await fetch('https://royal-backend-seller.onrender.com/login',{
            method:'post',
            body:JSON.stringify({email,pass}),
            headers:{
                'content-type':'application/json'
            },
        });
        result=await result.json();
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }else{
            alert("please enter right email or password");
        }
    }
    return(
        <div>
            <br/>
            <div className="signup">
            <h1>Login</h1>
            <input className="inputBox" type="text" placeholder="Enter Your Email "
            value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input className="inputBox" type="password" placeholder="Enter Your password "
            value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
            <button onClick={loginData} className="signupbtn" >Login</button>
            </div>
            <br/>
            
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default Login;
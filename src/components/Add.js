
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Add(){

    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [category,setcategory]=useState("");
    const [company,setcompany]=useState("");


    const addData= async ()=>{
        
        let result= await fetch('http://localhost:5000/addproduct',{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'content-type':'application/json'
            },
        });
        alert("Your product is added successfully");
    }
    return(
        <div>
                        <br/>
            <div className="signup">
            <h1>Add Data</h1>
            <input className="inputBox" type="text" placeholder="Enter Product Name "
             value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input className="inputBox" type="text" placeholder="Enter Product price "
            value={price} onChange={(e)=>{setprice(e.target.value)}}/>
            <input className="inputBox" type="text" placeholder="Enter Product category "
            value={category} onChange={(e)=>{setcategory(e.target.value)}}/>

            <input className="inputBox" type="text" placeholder="Enter Product company "
            value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
            <button onClick={addData} className="signupbtn" >AddData</button>
            </div>
            <br/>
            <br/>
            <br/>

        </div>
    )
}
export default Add;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const navigate=useNavigate();

    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [category,setcategory]=useState("");
    const [company,setcompany]=useState("");

    const params=useParams();
    useEffect(()=>{
        console.log(params);
        getData();
    },[]);

    const getData=async()=>{
        let result=await fetch(`https://royal-backend-seller.onrender.com/products/${params.id}`);
        result=await result.json();
        console.log(result);
        setname(result.name);
        setprice(result.price);
        setcategory(result.category);
        setcompany(result.company);
    }
    const updateData=async()=>{
        let result= await fetch(`https://royal-backend-seller.onrender.com/products/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'content-type':'application/json'
            },
        });
        result=await result.json();
        alert("Your product is updated successfully");
        navigate("/");
    }
    return (
        <div>
            <br />
            <div className="signup">
                <h1>Update Data</h1>
                <input className="inputBox" type="text" placeholder="Update Product Name "
                    value={name} onChange={(e) => { setname(e.target.value) }} ></input>
              

                <input className="inputBox" type="text" placeholder="Update Product price "
                    value={price} onChange={(e) => { setprice(e.target.value) }} />

                <input className="inputBox" type="text" placeholder="Update Product category "
                    value={category} onChange={(e) => { setcategory(e.target.value) }} />

                <input className="inputBox" type="text" placeholder="Update Product company "
                    value={company} onChange={(e) => { setcompany(e.target.value) }} />

                <button onClick={updateData} className="signupbtn" >Update Data</button>
            </div>
            <br />
            <br />
            <br />

        </div>
    )
}
export default Update;
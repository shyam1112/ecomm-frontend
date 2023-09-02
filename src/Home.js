import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [product,setProduct]=useState();

    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        let result=await fetch("http://localhost:5000/products");
        result=await result.json();
        setProduct(result);
    }

    const deleteitem= async(id)=>{
        let result=await fetch(`http://localhost:5000/products/${id}`,{
          method:"delete"  
        });
        result=await result.json();
        if(result){
            alert("Product deleted successfully.");
            getData();
        }
        
    }
    return(
        <div className="product">
            <h2>Product List</h2>
            <ul>
                <li><strong>S. No</strong></li>
                <li><strong>Name</strong></li>
                <li><strong>Price</strong></li>
                <li><strong>Category</strong></li>
                <li><strong>Company</strong></li>
                <li style={{width:300}}><strong>Operation</strong></li>
            </ul>
            {
                product?.map((item,index)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li className="operation"><button style={{}} onClick={()=>deleteitem(item._id)}>Delete</button></li>
                        <li className="operation"><Link to={"/update/"+item._id}>Update</Link></li>
                    </ul>
                )
            }
        </div>
    )
}
export default Home;
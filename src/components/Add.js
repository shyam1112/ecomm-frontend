
import { useEffect, useState } from "react";
import { ChromePicker } from 'react-color';
function Add() {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const [error, serError] = useState(false);
    const [img, setimg] = useState("");
    const [size, setsize] = useState("");
    const addData = async () => {

        if (!name || !price || !category || !company || !img) {
            serError(true);
            return false;
        }

        let result = await fetch('https://royal-backend-seller.onrender.com/addproduct', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, img, size,color1,color2,color3 }),
            headers: {
                'content-type': 'application/json'
            },
        });
        alert("Your product is added successfully");

        setname("");
        setprice("");
        setcategory("");
        setcompany("");
        setimg("");
        setsize("");
    }
    // function convertTobase64(e){
    //     const reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload=()=>{
    //         setimg(reader.result);
    //     };
    //     reader.onerror=error=>{
    //         console.log("Error in img :",error);
    //     }
    // }
    async function convertTobase64(e) {
        const file = e.target.files[0];

        if (!file) {
            return; // No file selected
        }

        const maxSizeKB = 100; // Maximum size in KB
        if (file.size > maxSizeKB * 1024) {
            // If the file size exceeds the maximum, resize it
            try {
                const resizedImg = await resizeImage(file, 800);

                const reader = new FileReader();
                reader.readAsDataURL(resizedImg);
                reader.onload = () => {
                    setimg(reader.result);
                };
            } catch (error) {
                console.error("Error resizing image:", error);
            }
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setimg(reader.result);
            };
        }
    }

    async function resizeImage(file, maxSize) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
                let width = img.width;
                let height = img.height;

                if (width > maxSize || height > maxSize) {
                    if (width > height) {
                        height *= (maxSize / width);
                        width = maxSize;
                    } else {
                        width *= (maxSize / height);
                        height = maxSize;
                    }

                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => {
                        resolve(blob);
                    }, file.type);
                } else {
                    resolve(file);
                }
            };

            img.onerror = (error) => {
                reject(error);
            };
        });
    }

    const [color1, setcolor1] = useState('#000000'); // Initial color

    const handleChangecolor1 = (newColor) => {
        setcolor1(newColor.hex);
    };

    const [color2, setcolor2] = useState('#000000'); // Initial color

    const handleChangecolor2 = (newColor) => {
        setcolor2(newColor.hex);
    };

    const [color3, setcolor3] = useState('#000000'); // Initial color

    const handleChangecolor3 = (newColor) => {
        setcolor3(newColor.hex);
    };

    return (
        <div>
            <br />
            <div className="signup">
                <h1>Add Data</h1>
                <input className="inputBox" type="text" placeholder="Enter Product Name "
                    value={name} onChange={(e) => { setname(e.target.value) }} />
                {error && !name && <span className="invalid-input">Enter valid name</span>}

                <input className="inputBox" type="text" placeholder="Enter Product price "
                    value={price} onChange={(e) => { setprice(e.target.value) }} />
                {error && !price && <span className="invalid-input">Enter valid price</span>}

                <input className="inputBox" type="text" placeholder="Enter Product category "
                    value={category} onChange={(e) => { setcategory(e.target.value) }} />
                {error && !category && <span className="invalid-input">Enter valid category</span>}

                <input className="inputBox" type="text" placeholder="Enter Product company "
                    value={company} onChange={(e) => { setcompany(e.target.value) }} />
                {error && !company && <span className="invalid-input">Enter valid company</span>}

                <input className="inputBox" type="text" placeholder="Enter Product size "
                    value={size} onChange={(e) => { setsize(e.target.value) }} />

                <div style={{ display: 'inline-flex', alignItems: 'center',border:"2px solid black" }}>
                    <h2 style={{paddingRight:"20px"}}>Select Color</h2>
                    <ChromePicker color={color1} onChange={handleChangecolor1} />
                    <div style={{ marginLeft: '20px' }}>
                        Selected Color 1: <span style={{ color1 }}>{color1}</span>
                    </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center',border:"2px solid black" }}>
                    <h2 style={{paddingRight:"20px"}}>Select Color</h2>
                    <ChromePicker color={color2} onChange={handleChangecolor2} />
                    <div style={{ marginLeft: '20px' }}>
                        Selected Color 2: <span style={{ color2 }}>{color2}</span>
                    </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center',border:"2px solid black" }}>
                    <h2 style={{paddingRight:"20px"}}>Select Color</h2>
                    <ChromePicker color={color3} onChange={handleChangecolor3} />
                    <div style={{ marginLeft: '20px' }}>
                        Selected Color 3: <span style={{ color3 }}>{color3}</span>
                    </div>
                </div>


                <input className="inputBox" type="file" accept="image/*" placeholder="Enter Product company "
                    onChange={convertTobase64} />
                {error && !img && <span className="invalid-input">Upload Photo</span>}

                {img == "" || img == null ? "" : <img width={100} height={100} src={img} alt="imgpreview" />}

                <button onClick={addData} className="signupbtn" >AddData</button>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
export default Add;
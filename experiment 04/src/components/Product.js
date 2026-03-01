import {useEffect, useState} from "react";
import {fetchProduct} from "../api/productApi";

const Product=()=>{
    const [product,setProduct]=useState(null);
     
    useEffect(()=>{
    fetchProduct().then(setProduct);
    },[]);
    if(!product){
        return <div>Loading...</div>;
    }
    return(
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
        </div>
    );  

};
export default Product;
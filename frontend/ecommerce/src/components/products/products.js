import React,{useState,useEffect} from "react";
import axios from 'axios';
import "./products.css";
import { connect } from 'react-redux'

function Products() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    
    axios.get('http://localhost:4001/getproducts').then((data)=>setProducts(data.data)).catch();

  }, [])

  return (
    <div>
      <div>
        {" "}
        <h1> Products</h1>{" "}
      </div>
      <hr />

    

     {
       products.map((data)=>{
 return (
         <>
           <div className="container">
            <div className="card">
          <div>
            <div>
              <h3>{data.name} </h3>

              <p1> PRICE ${data.price}</p1>

              <br />

              <button className="AddButton"> Add to Card</button>
            </div>
          </div>
        </div>
        </div>
      </>

         )
       })

     }

       
     
    </div>
  );
}

export default Products;

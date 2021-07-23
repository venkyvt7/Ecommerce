import React,{useState,useEffect} from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import "./products.css";
import { addToCart } from "../../redux/shopping/shopping-action";


function Products(props) {


  console.warn(props.data)

  const [products, setProducts] = useState([]);


  useEffect(() => {
   
    axios.get('http://localhost:4001/getproducts').then((data)=>setProducts(data.data)).catch();

  }, [])


  useEffect(() => {
   
  
    console.log(props.data.cardItems.length,"kjkjjkjkjkf")

  })

  
  // const [cart,setCart]=useState([]);

  
  


  return (
    <div>
      <div>
        {" "}
        {props.data.cardItems.length}
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

              <button onClick={()=>{props.addToCartHandler(data)}} className="AddButton"> Add to Card</button>
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

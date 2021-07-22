import React,{useState} from 'react'
import './navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder' 
function Navbar() {

const [butt,setButt]=useState(1);



    return (
        <div >
          
                <nav>
       
        <ul>
         <button  className="butt1" onClick={()=>{setButt(1-butt)}}> {" "} 
       
       <ReorderIcon />
       </button> 
           <div className="links" id={butt?"hidden":"show"}>   
           
           <a href="/home">   <li> HOME</li> </a> 
           <a href="/shop">    <li> SHOP</li> </a> 
           <a href="/cart">  <li> CART</li> </a> 
           <a href="/myorders">  <li> MYORDERS</li> </a> 
           <a href="/account">  <li>ACCOUNT</li> </a> 
           <a href="/logout">  <li> LOGOUT  </li> </a> 
                </div>  
       
        </ul>

                </nav>
          
        </div>
    )
}

export default Navbar

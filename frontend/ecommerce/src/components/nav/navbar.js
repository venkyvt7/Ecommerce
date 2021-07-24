import React,{useState} from 'react'
import './navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Navbar(props) {

const [butt,setButt]=useState(1);

console.warn(props.data.cardItems.length,"navbr");


    return (
        <div >
          
                <nav>
       
        <ul>
         <button  className="butt1" onClick={()=>{setButt(1-butt)}}> {" "} 
       
       <ReorderIcon />
       </button> 
           <div className="links" id={butt?"hidden":"show"}>   
           
           <a href="/home">   <li> HOME</li> </a> 
           {/* <a href="/shop">    <li> SHOP</li> </a>  */}
           <a href="/shop">  <li> 
           <div className="cartshow" style={{ display:"flex",  float:"right" ,marginTop:"12px"}}> 
           
           
           <div style={{ display:"flex",  float:"right" ,marginTop:"12px"}} > {props.data.cardItems.length}</div> 
<ShoppingCartIcon/> </div>
                
             SHOP</li> </a> 
           <a href="/myorders">  <li> MYORDERS</li> </a> 
           <a href="/account">  <li>ACCOUNT</li> </a> 
           <a href="/logout">  <li> LOGOUT  </li> </a> 
         <a>   
</a>
                </div>  
       
                
        </ul>

                </nav>
          
        </div>
    )
}

export default Navbar

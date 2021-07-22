import React,{useState} from 'react'
import './navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder' 
function Navbar() {

const [butt,setButt]=useState(1);



    return (
        <div >
          
                <nav>
       
        <ul>
         <button  onClick={()=>{setButt(1-butt)}}> {" "} 
       
       <ReorderIcon />
       </button> 
           <div className="links" id={butt?"hidden":"show"}>   
           
              <li> HOME</li>
                <li> SHOP</li>
                <li> CART</li>
                <li> MYORDERS</li>
                <li>ACCOUNT</li>
                <li> LOGOUT  </li>
                </div>  
       
        </ul>

                </nav>
          
        </div>
    )
}

export default Navbar

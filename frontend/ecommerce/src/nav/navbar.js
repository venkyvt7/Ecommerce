import React,{useState} from 'react'
import './navbar.css';
function Navbar() {

const [butt,setButt]=useState(1);



    return (
        <div>
           <div>
                <nav>
       
        <ul>
       <li>  <button onClick={()=>{setButt(1-butt)}}> open </button></li> 
           <div className="links" id={butt?"hidden":"show"}>   <li> home</li>
                <li> view products</li>
                <li> mycart</li>
                <li> myorders</li>
                <li>personal details</li>
                </div>  
       
        </ul>

                </nav>
           </div>
        </div>
    )
}

export default Navbar

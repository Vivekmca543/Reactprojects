import React from "react";
import "./Headermenu.css";
const Headermenu = ()=>{
return(
    <div className="headermenu-container">
        <div className="header-logo">
                <img src="./images/logo.svg" />
        </div>
        <div className="header-menu">
             <ul>
                   <li><a href="#">Dashboard</a></li>
                   <li><a href="#">Content</a></li>
                   <li><a href="#">Card Items</a></li>
                   <li><a href="#">Footer</a></li>  
             </ul>   
        </div>
    </div>
)
}
export default Headermenu;
import React from "react";
import './Footer.css';
const Footer = ()=>{
    const staticjson = {
        para:"Fusion VR Copyrights © 2023 All Rights Reserved. Designed by Dream Effects Multimedia",
    }
    return (
        <div className="footer">
            {staticjson.para}
        </div>
    )
}

export default Footer;
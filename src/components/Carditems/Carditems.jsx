import React,{useState} from 'react';
import './Carditems.css';
const Carditems = ()=>{
    
 const cardvalusestatic = [{id:1,imgsrc:"./images/augmented-reality-ar-chemicals-oil-and-gas.webp",h4content:"VR - Virtual Reality",para:"Virtual Reality or VR is a digitally created 3D environment which is designed to deliver a simulated immersive experience. Users will be able to navigate"},
 {id:2,imgsrc:"./images/mixed-reality-mr-life-sciences-pharma-healthcare.webp",h4content:"AR - Augmented Reality",para:"Augmented Reality (AR) technology brings you efficient and cost-effective psychophysics-based solutions to solve your problems. Using AR-Powered Tablets"},
{id:3,imgsrc:"./images/virtual-reality-vr-chemicals-oil-and-gas-offshore-rig.webp",h4content:"Mixed Reality (MR) technology",para:"It brings you efficient and cost-effective immersive solutions to solve your real-world industrial problems. The MR-Powered Wearable Goggles like Hololens or Magic Leap"}]
   return(
     <div className="card-container">
     { 
        cardvalusestatic.map(items=>(
          <div className="card-item">  
        <div className="product-img">
            <img src={items.imgsrc} />
        </div>
        <div className="product-details">
            <h4>{items.h4content}</h4>
            <p>{items.para}</p>
        </div>
        </div>
        ))}
     </div>
 );
};
export default Carditems;
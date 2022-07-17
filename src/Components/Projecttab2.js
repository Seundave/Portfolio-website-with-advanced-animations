import React from "react";
import '../style.css';
import img4 from "../assets/images/Pricing component with toggle master.JPG";
import img5 from "../assets/images/Countdown.JPG";
import img3 from "../assets/images/social media with toggle switcher.JPG";


export const Projecttab2 = () =>{
    return(
        <div className="Projecttab">
            <img src={img4} className="img1"/>
            <img src={img5} className="img1"/>
            <img src={img3} className="img1"/>
        </div>
    )
}
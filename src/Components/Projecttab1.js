import React from "react";
import '../style.css';
import img1 from "../assets/images/Restaurant.png";
import img2 from "../assets/images/countdown.png";
import img3 from "../assets/images/Pricing.png";



export const Projecttab1 = () =>{
    return(
        <div className="Projecttab">
            <img src={img1} alt="img1" className="img1" href="https://main--seundavegericht.netlify.app/"/>
            <img src={img2} alt="img2" className="img1" href="https://seundave.github.io/Launch-countdown-timer/"/>
            <img src={img3} alt="img3" className="img1" href="https://seundave.github.io/Pricing-component-with-toggle-master/"/>
        </div>
    )
}
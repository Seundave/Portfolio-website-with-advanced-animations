import React from "react";
import '../style.css';
import img1 from "../assets/images/Restaurant.png";
import img6 from "../assets/images/portfolio.png";



export const Projecttab2 = () =>{
    return(
        <div className="Projecttab">
            <a href="https://main--seundavegericht.netlify.app/"><img src={img1} alt="img1" className="img1" /></a>
            <a href="https://seundaveportfolio.netlify.app/"><img src={img6} alt="img1" className="img1" /></a>
        </div>
    )
}


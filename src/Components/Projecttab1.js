import React from "react";
import '../style.css';
import img1 from "../assets/images/Survey-form.JPG";
import img2 from "../assets/images/Tribute-page.JPG";
import img3 from "../assets/images/social media with toggle switcher.JPG";


export const Projecttab1 = () =>{
    return(
        <div className="Projecttab">
            <img src={img1} className="img1"/>
            <img src={img2} className="img1"/>
            <img src={img3} className="img1"/>
        </div>
    )
}
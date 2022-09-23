import React from "react";
import '../style.css';
import img4 from "../assets/images/Tribute-page.png";
import img5 from "../assets/images/Social-media-dashboard-with-theme-switcher_.png";
import img3 from "../assets/images/portfolio.png";


export const Projecttab2 = () =>{
    return(
        <div className="Projecttab">
            <img src={img4} alt="img4" className="img1" href="https://seundave.github.io/Tribute-page/"/>
            <img src={img5} alt="img5" className="img1" href="https://seundave.github.io/Social-media-dashboard-with-theme-switcher/"/>
            <img src={img3} alt="img5" className="img1"/>
        </div>
    )
}
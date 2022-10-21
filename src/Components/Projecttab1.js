import React from "react";
import '../style.css';
import img1 from "../assets/images/Restaurant.png";
import img2 from "../assets/images/countdown.png";
import img3 from "../assets/images/Pricing.png";
import img4 from "../assets/images/Tribute-page.png";
import img5 from "../assets/images/Social-media-dashboard-with-theme-switcher_.png";
import img6 from "../assets/images/portfolio.png";
import img7 from "../assets/images/Survey-form.png";
import img8 from "../assets/images/Documentation.png";
import img9 from "../assets/images/Product-landing-page.png";



export const Projecttab1 = () =>{
    return(
        <div className="Projecttab">
            <a href="https://main--seundavegericht.netlify.app/"><img src={img1} alt="img1" className="img1" /></a>
            <a href="https://seundave.github.io/Launch-countdown-timer/"><img src={img2} alt="img2" className="img1"/></a>
            <a href="https://seundave.github.io/Pricing-component-with-toggle-master/"><img src={img3} alt="img3" className="img1"/></a>
            <a href="https://seundave.github.io/Tribute-page/"><img src={img4} alt="img4" className="img1"/></a>
            <a href="https://seundave.github.io/Social-media-dashboard-with-theme-switcher/"><img src={img5} alt="img5" className="img1"/></a>
            <a href="https://seundaveportfolio.netlify.app/"><img src={img6} alt="img5" className="img1"/></a>
            <a href="https://seundave.github.io/Survey-form/"><img src={img7} alt="img3" className="img1"/></a>
            <a href="https://seundave.github.io/Technical-Documentation-Page/"><img src={img8} alt="img3" className="img1"/></a>
            <a href="https://seundave.github.io/Product-Landing-Page/"><img src={img9} alt="img3" className="img1"/></a>
        </div>
        
    )
}
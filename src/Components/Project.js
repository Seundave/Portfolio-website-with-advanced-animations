import React from "react";
import "../style.css";
import { Projecttab1 } from "./Projecttab1"
import { Projecttab2 } from "./Projecttab2"
import img1 from "../assets/images/Survey-form.JPG";
import img2 from "../assets/images/Tribute-page.JPG";


// let tabs = document.querySelectorAll('.tabs-toggle'),
// let contents = document.querySelectorAll('.tabs-content');

// tabs.forEach({tab, index} => {
//     tabs.addEventListener('click', () =>{
//         contents.forEach((content) =>{
//             content.classList.remove('is-active');
//         });
//         tabs.forEach((tab) =>{
//            tab.classList .remove('is-active');
//         });
//         contents[index].classList.add('is-active');
//         tabs[index].classList.add('is-active');
//     });
// });
export const Project = () =>{
    return(
        <div className="container">
            <div className="Project-title">
                <h1> Projects </h1>
                <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  </p>
            </div>
            <div className="tabs">
                <div className="tabs-head">
                    <div className="tabs-toggle is-active">
                    <span className="tabs-name">First Tab</span>
                    </div>
                    <div className="tabs-toggle">
                        <span className="tabs-name">Second Tab</span>
                    </div>
                    <div className="tabs-toggle">
                        <span className="tabs-name">Third Tab</span>
                    </div>
                </div>
                <div className="tabs-body">
                    <div className="tabs-content is-active">
                        <Projecttab1 
                            // img src={img1} className="img1"
                            // img src={img2} className="img1"
                            // img src={img1} className="img1"
                        /> 
                        <Projecttab2 
                            img src={img1} className="img1"
                        /> 
                        
                    </div>
                    <div className="tabs-content">
                        {/* <Projecttab1/>  */}
                    </div>
                    <div className="tabs-content">
                        {/* <Projecttab1/>  */}
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
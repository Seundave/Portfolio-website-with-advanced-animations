import React from "react";
import { useState } from "react";
import "../style.css";
import { Projecttab1 } from "./Projecttab1"
// import { Projecttab2 } from "./Projecttab2"
// import img1 from "../assets/images/Survey-form.JPG";
// import img2 from "../assets/images/Tribute-page.JPG";

export const Project = () =>{


        const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) =>{
            setToggleState(index);
        }
    
    return(
        <div className="container">
            <div className="Project-title">
                <h1> Projects </h1>
                <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  </p>
            </div>
            <div className="tabs">
                <div className="tabs-head">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(1)}>
                    <span className="tabs-name">First Tab</span>
                    </div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(2)}>
                        <span className="tabs-name">Second Tab</span>
                    </div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(3)}>
                        <span className="tabs-name">Third Tab</span>
                    </div>
                </div>

                <div className="content-body">
                    <div className={toggleState === 1 ? "tab1 active" : "tab1"}>
                        <Projecttab1/>     
                    </div>
                    <div className={toggleState === 2 ? "tab2 active" : "tab2"}>
                        <p>Coming soon!!!</p>
                    </div>
                    <div className={toggleState === 3 ? "tab3 active" : "tab3"}>
                        <Projecttab1/> 
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
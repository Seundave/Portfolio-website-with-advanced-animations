import React from "react";
import { useState } from "react";
import "../style.css";
import { Projecttab1 } from "./Projecttab1"
import { Projecttab2 } from "./Projecttab2"
import { Projecttab3 } from "./Projecttab3"


export const Project = () =>{


        const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) =>{
            setToggleState(index);
        }
    
    return(
        <div className="container" id="Projects">
            <div className="Project-title">
                <h1> Projects </h1>
                <p> My professional experience includes bringing the wireframes of the UX designer to life through HTML5, CSS3, Bootstrap, Javascript and Reactjs, as well as collaborating with Back End Developers to create a stellar finished product  </p>
            </div>
            <div className="tabs">
                <div className="tabs-head">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(1)}>
                    <span className="tabs-name">All projects</span>
                    </div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(2)}>
                        <span className="tabs-name">Reactjs</span>
                    </div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(3)}>
                        <span className="tabs-name">HTML & CSS</span>
                    </div>
                </div>

                <div className="content-body">
                    <div className={toggleState === 1 ? "tab1 active" : "tab1"}>
                        <Projecttab1/>     
                    </div>
                    <div className={toggleState === 2 ? "tab2 active" : "tab2"}>
                        <Projecttab2/> 
                    </div>
                    <div className={toggleState === 3 ? "tab3 active" : "tab3"}>
                        <Projecttab3/> 
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
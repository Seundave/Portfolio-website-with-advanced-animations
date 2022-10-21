import React from "react";
import '../style.css';
import first from "../assets/images/meter1.svg"
import second from "../assets/images/meter1.svg"
import third from "../assets/images/meter1.svg"

export const Webdevelopment =()=>{
    return(
        <div className="skills" id="skills">
            <div className="skills-intro">
                <h2>Skills</h2>
                <p> I have vast experience in the following tech stacks and I have completed several projects with these skills. Here are my tech stack ratings</p>
            </div>
            <div className="progress">
                <div className="web-dev">
                    <img src={first} alt="html"/>
                    <p> HTML</p>
                </div>
                <div className="web-dev">
                    <img src={second} alt="css"/>
                    <p> CSS</p>
                </div>
                <div className="web-dev">
                    <img src={second} alt="bootstrap"/>
                    <p> BOOTSTRAP</p>
                </div>
                
                <div className="web-dev">
                    <img src={third} alt="javascript"/>
                    <p> JAVASCRIPT</p>
                </div>
                <div className="web-dev">
                    <img src={second} alt="reactjs"/>
                    <p> REACTJS</p>
                </div>
            </div>
                {/* <div className="outer">
                    <div className="inner">
                        <div id="number"> 
                            <p>95%</p>
                        </div>
                    </div>
                </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg> */}
                
                
           
            {/* <div className="web">
                <p> Web Development</p>
            </div> */}

            {/* <Graphicdesign/> */}
        </div>

        
    )
} 
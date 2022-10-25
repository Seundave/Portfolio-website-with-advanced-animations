import React from "react";
import '../style.css';
import {DiCss3} from 'react-icons/di';
import {DiHtml5} from 'react-icons/di';
import {FaBootstrap} from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';

export const Webdevelopment =()=>{
    return(
        <div className="skills" id="skills">
            <div className="skills-intro">
                <h2>Skills</h2>
                <p> I have vast experience in the following tech stacks and I have completed several projects with these skills. </p>
            </div>
            <div className="progress">
                <div className="web-dev">
                    <DiCss3 className='css'/>
                    <p> HTML</p>
                </div>
                <div className="web-dev">
                    <DiHtml5 className='html'/>
                    <p> CSS</p>
                </div>
                <div className="web-dev">
                    <FaBootstrap className='bootstrap'/>
                    <p> BOOTSTRAP</p>
                </div>
                
                <div className="web-dev">
                     <DiJavascript1 className='javascript'/>
                    <p> JAVASCRIPT</p>
                </div>
                <div className="web-dev">
                    <FaReact className='react'/>
                    <p> REACTJS</p>
                </div>
                <div className="web-dev">
                    <BsGithub className='github'/>
                    <p> GITHUB</p>
                </div>
            </div>    
        </div>

        
    )
} 
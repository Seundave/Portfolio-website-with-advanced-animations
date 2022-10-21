import React from "react";
// import {Container,Row, Col} from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import header-img from "..assets/images/header-img.svg";
import { useState, useEffect, useCallback, useMemo } from "react"
import '../style.css';
import Header from "../assets/images/header-img.svg";
import {motion} from 'framer-motion'


export const Banner = () =>{
    const [loopNum, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState (false);
    const toRotate =useMemo(() =>["Front-end Developer", "Graphic Designer", "Web Developer"], [])
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300- Math.random()*100);
    const period = 2000;



    const tick = useCallback (() =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length +1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta =>prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting (true);
            setDelta (period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNumber(loopNum +1);
            setDelta(500);
        }
    }, [isDeleting,loopNum,text.length,toRotate]) 
    
    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () =>{ clearInterval(ticker)};
    }, [text,delta,tick])

   

    return(
        <section>
            <div className="content" id="home">
                <button className="Welcome"> Welcome to my Portfolio</button>
                <h2>I am a {text}</h2>
                <p> Hello, I am David. I specialize in Front-End Development and Graphic Designing. I build high-quality, pixel-perfect, mobile-friendly, and strong web solutions that can empower clients. I pay attention to details and always like to be accurate and thorough with every project.</p>
                <button className="connect-us">Let's Connect</button>
            </div>
            <div className="animation">
                <motion.img src={Header} alt="Header-img" className='Header-img' animate={{rotate: [0,50,0,0]}} transition={{repeat:Infinity,duration:3.5}}/>
            </div>
        </section>  
    )
}
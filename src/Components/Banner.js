import React from "react";
// import {Container,Row, Col} from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import header-img from "..assets/images/header-img.svg";
import { useState, useEffect, useCallback, useMemo } from "react"
import '../style.css';
import Header from "../assets/images/header-img.svg";
import {motion} from 'framer-motion'
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

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
                <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
                <button className="connect-us">Let's Connect</button>
            </div>
            <div className="animation">
                <motion.img src={Header} alt="Header-img" className='Header-img' animate={{rotate: [0,50,0,0]}} transition={{repeat:Infinity,duration:3.5}}/>
            </div>
        </section>  
    )
}
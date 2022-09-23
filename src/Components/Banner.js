import React from "react";
// import {Container,Row, Col} from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import header-img from "..assets/images/header-img.svg";
import { useState, useEffect } from "react"
import '../style.css';
import Header from "../assets/images/header-img.svg";
import {motion} from 'framer-motion'
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () =>{
    const [loopNum, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState (false);
    const toRotate =["Front-end Developer", "Graphic Designer", "Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300- Math.random()*100);
    const period = 2000;


    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () =>{ clearInterval(ticker)};
    }, [text])

    const tick = () =>{
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
    }

    return(
        <section>
            <div className="content">
                <button className="Welcome"> Welcome to my Portfolio</button>
                <h2>I am a {text}</h2>
                <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
                <button className="connect-us">Let's Connect</button>
            </div>
            <div className="animation">
                <motion.img src={Header} alt="Header-img" className='Header-img' animate={{rotate: [0,50,0,0]}} transition={{repeat:Infinity,duration:3.5}}/>
            </div>
        </section>
    //  <section className="banner" id="home">
    //     {/* <Container>
    //         <Row className="align-items-center">
    //             <Col xs={12} md={6} xl={7}>
    //                 <span className="tagline">Welcome to my Portfolio</span>
    //                 <h1>{`Hi I'm webdecoded`}<span className="wrap">Web developer</span></h1>
    //                 <p>bjklghjghbjgbzgj;bzgjofngzfdkoghnhkogngokngkoejgnkgongkognrkgoknfklnknhkonkhnhkhntrk</p>
    //                 <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
    //             </Col>
    //             <Col xs={12} md={6} xl={5}>
    //                 <img src={'header-img'} alt="Header img"/>
    //             </Col>
    //         </Row>
    //     </Container> */}
    //  </section>   
    )
}
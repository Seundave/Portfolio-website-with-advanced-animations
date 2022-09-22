import React from "react";
// import {useState, useEffect} from "react";
// import{Navbar} from "react-bootstrap";
import Navbar from "../assets/images/logo.svg"
// import img1 from "../assets/images/nav-icon1.svg"
// import img2 from '../assets/images/nav-icon2.svg'
// import img3 from '../assets/images/nav-icon3.svg'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { RiFacebookCircleLine } from "react-icons/ri";
// import { BsInstagram } from "react-icons/bs";
import "../style.css";
// import { Socialicons } from "./Socialicons";


export const NavBar = () =>{
    // const [activeLink, setActiveLink] = useState('home');
    // const [scrolled, setScrolled]batter = useState(false);

    // useEffect(()=>{
    //     const onScroll = () =>{
    //         if (window.scollY > 50){
    //             setScrolled(true);
    //         }else{
    //             setScrolled(false);
    //         }
    //     }

    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // },[]);

    // const onUpdateActiveLink = (value) =>{
    //     setActiveLink(value);
    // }

    return(
        // <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img src={''} alt="Logo"/>
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        //             <span className="navbar-toggle-icon"></span>
        //         </Navbar.Toggle>
        //         <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick ={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        //             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick ={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
        //             <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick ={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        //         </Nav>
        //         <span className="navbar-text">
        //             <div className="social-icon">
        //                 <a href="#"><img src={'navIcon1'} alt=""/></a>
        //                 <a href="#"><img src={'navIcon2'} alt=""/></a>
        //                 <a href="#"><img src={'navIcon3'} alt=""/></a>
        //             </div>
        //             <button className="vvd" onClick={() => console.log('connect')}><span> Let's Connect</span></button>
        //         </span>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <div className="Navbar">
            <div className="Logo">
                {/* <p>Logo</p> */}
                <img src={Navbar} alt="Logo" className="company-logo"/>
            </div>
            <div className="nav">
                <ul>
                    <a href="#home"  id="home"><li>Home</li></a>
                    <a href="#skills"  id="skills"><li>Skills</li></a>
                    <a href="#projects" id="projects"><li>Projects</li></a>
                </ul>
                {/* <Socialicons/> */}
                <button className="connect"> Let's Connect</button>
            </div>
        </div>
    )
}
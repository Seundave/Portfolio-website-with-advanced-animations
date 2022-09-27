import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiHome} from 'react-icons/hi';
import {FcAbout} from 'react-icons/fc';
import {MdFastfood} from 'react-icons/md';
import Navbar from "../assets/images/logo.svg"
import "../style.css";
// import { Socialicons } from "./Socialicons";




export const NavBar = () =>{

    const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => setToggleMenu(!toggleMenu)
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
        <div className='navbar'>
            <div className="navbar_logo">
                <img src={Navbar} alt="navbar_logo"/>
            </div>
            <ul className='navbar_links'>
                <li className='opensans'><a href="#home">Home</a></li>
                <li className='opensans'><a href="#skills">Skills</a></li>
                <li className='opensans'><a href="#Projects">Projects</a></li>
                <a href="#connect" className="connect"> Let's Connect</a>
            </ul>


            <div className='navbar_smallscreen'>
                <GiHamburgerMenu cursor="pointer" color="#fff" fontSize={27}  onClick={showMenu}/>
                {
                toggleMenu && (
                <div className="smallscreen-overlay">
                    <AiOutlineClose color="#fff" cursor="pointer" fontSize={27} className="overlay-close" onClick={showMenu}/>
                    <ul className='smallscreen-links'onClick={showMenu}>
                        <li className='opensans'><HiHome/><a href="#home">Home</a></li>
                        <li className='opensans'><FcAbout/><a href="#skills">Skills</a></li>
                        <li className='opensans'><MdFastfood/><a href="#Projects">Projects</a></li>
                    </ul>
                </div>
                )}
                
            </div>
     </div>
    )
}
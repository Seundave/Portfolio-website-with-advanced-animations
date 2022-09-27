import React from 'react'
import {motion} from 'framer-motion'
import contact from "../assets/images/contact-img.svg"


export const Contactus = () =>{
    return(
       <div className="contact" id="connect">
            <div className="contact-anim">
                <motion.img src={contact} alt="contact" className="contact-img" animate={{rotate: [0,0,50,0]}} transition={{repeat:Infinity,duration:3.5}}/>
            </div>
            <div className='contact-form'>
                <form>
                    <h2> Get In Touch</h2>
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="tel" placeholder="Phone No."/>
                    <textarea name="comment" form="usrform">Message</textarea>
                    <button className='send-btn'> Send </button>
                </form>
            </div>
       </div> 
    )
}
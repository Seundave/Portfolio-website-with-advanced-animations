import React from 'react'
import contact from "../assets/images/contact-img.svg"

export const Contactus = () =>{
    return(
       <div className="contact">
            <div className="contact-anim">
                <img src={contact} className="contact-img"/>
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
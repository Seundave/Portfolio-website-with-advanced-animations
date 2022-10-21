import React from 'react'
import {useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import contact from "../assets/images/contact-img.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>{
    toast.success('Message sent', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

}
export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pn71zu3', 'template_ycplnwi', form.current, '48tLJD3wWETwpuNEo')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return(
        <div className="contact" id="connect">
             <div className="contact-anim">
                 <motion.img src={contact} alt="contact" className="contact-img" animate={{rotate: [0,0,50,0]}} transition={{repeat:Infinity,duration:3.5}}/>
             </div>
             <div className='contact-form'>
                 <form ref={form} onSubmit={sendEmail}>
                     <h2> Get In Touch</h2>
                     <input type="text" name="first_name" placeholder="First name"/>
                     <input type="text" name="last_name" placeholder="Last name"/>
                     <input type="email" name="user_email" placeholder="Email Address"/>
                     <input type="tel" name="phone" placeholder="Phone No."/>
                     <textarea name="message">Message</textarea>
                     <button className='send-btn' onClick={notify}> Send </button>
                 </form>
                 
                 <ToastContainer/>
             </div>
        </div> 
     )
}

export default ContactUs




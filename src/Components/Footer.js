import "../style.css";
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';





export const Footer =()=>{
    return(
        <div className="Footer">
            <div className="footer-logo">
                <h1 className="logo-text"> SEUNDAVE</h1>
            </div>
            <div className="contact-logo">
                <a href="https://github.com/Seundave"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/david-olaleye//"><BsLinkedin/></a>
            </div>
              
        </div>

        
    )
} 
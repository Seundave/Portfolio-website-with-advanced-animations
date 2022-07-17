import { Graphicdesign } from "./Graphicdesign";
import '../style.css';

let number = document.getElementById("number");
let counter = 0;
setInterval(() =>{
    if (counter === 95){
        clearInterval();
    }else{
        counter +=1; 
        number.innerHTML = counter +"%";
    }
   
},1000);

export const Webdevelopment =()=>{
    return(
        <div className="skills">
            <div className="skills-intro">
                <h2>Skills</h2>
                <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, Provide a valid, navigable address as the href value. </p>
            </div>
            <div className="progress">
                <div className="outer">
                    <div className="inner">
                        <div id="number"> 
                            <p>95%</p>
                        </div>
                    </div>
                </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
                
                
            </div>
            <div className="web">
                <p> Web Development</p>
            </div>

            <Graphicdesign/>
        </div>

        
    )
} 
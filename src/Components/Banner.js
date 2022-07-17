// import {Container,Row, Col} from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import header-img from "..assets/images/header-img.svg";
import '../style.css';
import Header from "../assets/images/header-img.svg";

export const Banner = () =>{
    return(
        <section>
            <div className="content">
                <button className="Welcome"> Welcome to my Portfolio</button>
                <h2>Hi! I'm David Olaleye</h2>
                <p> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
                <span className="connect-us">Let's Connect</span>
            </div>
            <div className="animation">
                <img src={Header} alt="Header-img" className='Header-img'/>
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
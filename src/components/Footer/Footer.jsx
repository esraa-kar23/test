import { Container } from 'react-bootstrap';
import logo from './../../../public/imges/LOGO.png';
import icon from './../../../public/imges/Icon.png'
import icon1 from './../../../public/imges/Icon-1.png'
import icon2 from './../../../public/imges/Icon-2.png'
import icon3 from './../../../public/imges/Icon-3.png'
import icon4 from './../../../public/imges/Icon-4.png'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Container className='footerContainer'>
                    <div className='ek-container'>
                        <div className="ek-footer-part-one">
                            <div className="ek-footerContent-1">
                                <img className='logo' src={logo} alt="" />
                                <p className='ek-contentUnderLogo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="ek-footerContent-2">
                                <h4 className='ek-content-f-2'>Get help</h4>
                                <div className="ek-links-footer-part-2">
                                    <p><a href="#">Contact Us</a></p>
                                    <p><a href="#">Latest Article</a></p>
                                    <p><a href="#">FAQ</a></p>
                                </div>
                            </div>
                            <div className="ek-footerContent-3">
                                <h4>PROGRAMS</h4>
                                <div>
                                    <p>Art & Design</p>
                                    <p><span>Business</span></p>
                                    <p>IT & Software</p>
                                    <p>Languages</p>
                                    <p>Programming</p>
                                </div>
                            </div>
                            <div className="ek-footerContent-4">
                                <h4>contact us</h4>
                                <div className="ek-content-footer-part-4">
                                    <p className='ek-address'>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                                    <p className='ek-mail'>Tel: + (123) 2500-567-8988 <br />Mail: supportlms@gmail.com</p>
                                    <div className='social-media'>
                                        <a href="#"><img src={icon} /></a>
                                        <a href="#"><img src={icon1} /></a>
                                        <a href="#"><img src={icon2} /></a>
                                        <a href="#"><img src={icon3} /></a>
                                        <a href="#"><img src={icon4} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ek-footer-copyRight">
                        <p className='copy-right'>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
                    </div>
                </Container>
            </footer>


        </>
    )
}

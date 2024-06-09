import logo from './../../../public/LOGO.png'
import icon from './../../../public/Icon.png'
import icon1 from './../../../public/Icon-1.png'
import icon2 from './../../../public/Icon-2.png'
import icon3 from './../../../public/Icon-3.png'
import icon4 from './../../../public/Icon-4.png'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

export default function Footer() {
  return (
    <>
        <footer className='footer'>
        <Container>
          <Row className='ek-row-one'>
            <Col lg={4} className="ek-footer-part-one">
                <div className='logoFooter'>
                  <img style={{ width: "166.3px" }} src={logo} alt="" />
                </div>
                <p className='ek-content-f-one'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatum saepe quas nihil blanditiis, fugiat minima? Expedita accusamus aliquam deserunt.</p>
            </Col>
            <Col lg={2} className='ek-footer-part-2'>
              <h4 className='ek-content-f-2'>Get help</h4>
              <div className="links-footer-part-2">
                <span><a href="">contact us</a></span>
                <span><a href="">latest article</a></span>
                <span><a href="">FAQ</a></span>
              </div>
            </Col>
            <Col lg={2} className='ek-footer-part-3'>
              <h4>PROGRAMS</h4>
              <div>
                <p>Art & Design</p>
                <p><span>Business</span></p>
                <p>IT & Software</p>
                <p>Languages</p>
                <p>Programming</p>
              </div>
            </Col>

            <Col lg={2} className='ek-footer-part-4'>
              <h4>contact us</h4>
              <div>
                <p>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                <p>Tel: + (123) 2500-567-8988 Mail: supportlms@gmail.com</p>
              </div>
              <div className='social-media'>
                <a href=""><img src={icon} /></a>
                <a href=""><img src={icon1} /></a>
                <a href=""><img src={icon2} /></a>
                <a href=""><img src={icon3} /></a>
                <a href=""><img src={icon4} /></a>
              </div>
            </Col>
          </Row>
          <Row className='ek-copy-right-container'>
            <p className='copy-right'>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
          </Row>
        </Container>
      </footer>
    </>
  )
}

import CtaForm from "../_components/CtaForm";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function CTA() {
    return (
             <div className="home_cta">
        <h1>
          Ready to start on
          <br />
          <span>your project?</span>
        </h1>
        <div className="home_cta-grid grid-2">
          <CtaForm />

          <div className="home_cta-contact">
            <div className="heading">
              <h2>Get in Touch</h2>
              <p>We will get back to you in 24 hours.</p>
            </div>

            <div className="home_cta-contact-box">
              <div className="list">
                <h4>Call us</h4>
                <a href="tel:+2349021144350" target="_blank">
                  +234 902 114 4350
                </a>
              </div>

              <div className="list">
                <h4>Email us</h4>
                <a href="mailto:luxaeonspaces@gmail.com" target="_blank">
                  luxaeonspaces@gmail.com
                </a>
              </div>
              <div className="list">
                <h4>Follow us</h4>
               
               <div className="social-box">
                 <a href="https://www.tiktok.com/@luxaeon_spaces?_r=1&_t=ZS-98UHdVjQr3Y" target="_blank"><FaTiktok /></a>
                 <a href="https://www.instagram.com/luxaeon_spaces/" target="_blank"><FaInstagram /></a>
               </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default CTA

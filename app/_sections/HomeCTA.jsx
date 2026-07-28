import CtaForm from "../_components/CtaForm";

function HomeCTA() {
  return (
    <section className="container">
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
                <a href="tel:+" target="_blank">
                  +1 (555) 000-0000
                </a>
              </div>

              <div className="list">
                <h4>Email us</h4>
                <a href="mailto:" target="_blank">
                  example@gmail.com
                </a>
              </div>
              <div className="list">
                <h4>Instagram</h4>
                <a href="#" target="_blank">
                  Instagram username
                </a>
              </div>
              <div className="list">
                <h4>Facebook</h4>
                <a href="#" target="_blank">
                  Facebook username
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;

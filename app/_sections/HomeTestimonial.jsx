import { TESTIMONIALS } from "../_lib/data";

function HomeTestimonial() {
  return (
    <section className="container">
      <div className="home_testimonials">
        <div className="heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Client Voices</h2>
        </div>
        <div className="home_testimonials-grid grid-3">
          <div className="home_testimonials-lists">
            {TESTIMONIALS.map((testimonial, i) => (
              <div className="home_testimonials-item" key={i}>
                <h5 className="home_testonials-quote">{testimonial.message}</h5>

                <p>{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="home_testimonials-stat">
            <div className="top">
              <h3>
                The right partner
                <br />
                <span>makes all the difference.</span>
              </h3>
              <p>See why clients trust our expertise</p>
            </div>

            <div className="bottom">
              <h3>Be One</h3>
              <p>of the satisfied clients have chosen Luxaeon Spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTestimonial;

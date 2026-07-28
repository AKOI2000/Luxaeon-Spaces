"use client";

function CtaForm() {
    return (
             <form
            className="home_cta-form flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="visually-hidden" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" type="text" placeholder="Your name" />

            <label className="visually-hidden" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
            />

            <label className="visually-hidden" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              rows={4}
            />

            <button type="submit" className="btn btn--inverted">
              Get in touch
            </button>
          </form>
    )
}

export default CtaForm

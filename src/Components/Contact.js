import React from "react";
import "../App.scss";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_382776l",
        "template_abc6n4s",
        e.target,
        "user_UoyXG6GIs21hFcx6zkdmI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="contact-form">
              <form onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
                <div>
                  <button className="btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                condimentum quam ac mi viverra dictum. In efficitur ipsum diam,
                at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
              </p>
              <h4>
                <i className="fa fa-map-marker"></i>123 News Street, NY, USA
              </h4>
              <h4>
                <i className="fa fa-envelope"></i>info@example.com
              </h4>
              <h4>
                <i className="fa fa-phone"></i>+123-456-7890
              </h4>
              <div className="social">
                <a href="/contact">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/contact">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/contact">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="/contact">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/contact">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

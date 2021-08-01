import React from "react";
import "../App.scss";
import emailjs from "emailjs-com";
import {
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
} from "@material-ui/icons";

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
              <h3>About Us</h3>
              <p>We are final year undergraduate students at IIT Roorkee.</p>
              <h4>
                <i className="fa fa-map-marker"></i>IITR
              </h4>
              <h4>
                <i className="fa fa-envelope"></i>jsonkusale@ce.iitr.ac.in |
                msoni@ce.iitr.ac.in
              </h4>
              <h4>
                <i className="fa fa-phone"></i>+123-456-7890
              </h4>
              <div className="social">
                <a href="/contact">
                  <Twitter style={{ color: "#111111" }} />
                </a>
                <a href="/contact">
                  <Facebook style={{ color: "#111111" }} />
                </a>
                <a href="/contact">
                  <LinkedIn style={{ color: "#111111" }} />
                </a>
                <a href="/contact">
                  <Instagram style={{ color: "#111111" }} />
                </a>
                <a href="/contact">
                  <YouTube style={{ color: "#111111" }} />
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

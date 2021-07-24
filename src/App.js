import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./bootstrap-css/bootstrap.css";
import logo from "./img/logo.png";
import ads1 from "./img/ads-1.jpg";
import TechnologyData from "./Components/TechnologyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import news1 from "./img/news-350x223-1.jpg";
import news2 from "./img/news-350x223-2.jpg";
import news3 from "./img/news-350x223-3.jpg";
import news4 from "./img/news-350x223-4.jpg";
import news5 from "./img/news-350x223-5.jpg";
import news21 from "./img/news-450x350-1.jpg";
import news22 from "./img/news-450x350-2.jpg";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tb-contact">
                <p>
                  <i className="fas fa-envelope"></i>info@mail.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i>+012 345 6789
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tb-menu">
                <a href="/">About</a>
                <a href="/">Privacy</a>
                <a href="/">Terms</a>
                <a href="/">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="b-logo">
                <a href="index.html">
                  <img src={logo} alt="Logo"></img>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="b-ads">
                <a href="https://htmlcodex.com">
                  <img src={ads1} alt="Ads"></img>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="b-search">
                <input type="text" placeholder="Search"></input>
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="/" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu">
                    <a href="/" className="dropdown-item">
                      Sub Item 1
                    </a>
                    <a href="/" className="dropdown-item">
                      Sub Item 2
                    </a>
                  </div>
                </div>
                <a href="single-page.html" className="nav-item nav-link">
                  Single Page
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
              <div className="social ml-auto">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="top-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6 tn-left">
              <div className="row tn-slider">
                <Slider>
                  <div className="col-md-6">
                    <div className="tn-img">
                      <img src={news21} alt="" />
                      <div className="tn-title">
                        <a href="/">Lorem ipsum dolor sit amet</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tn-img">
                      <img src={news22} alt="" />
                      <div className="tn-title">
                        <a href="/">
                          Integer hendrerit elit eget purus sodales maximus
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-6 tn-right">
              <div className="row">
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src={news1} alt="" />
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src={news2} alt="" />
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src={news3} alt="" />
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src={news4} alt="" />
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cat-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Sports</h2>
              <div className="row cn-slider">
                <Slider slidesToShow={2} autoplay={true} autoplaySpeed={3000}>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news1} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news2} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news3} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-6 tech-div">
              <h2>Technology</h2>
              <div className="row cn-slider">
                <TechnologyData />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cat-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Business</h2>
              <div className="row cn-slider">
                <Slider slidesToShow={2} autoplay={true} autoplaySpeed={3000}>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news5} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news4} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news3} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Entertainment</h2>
              <div className="row cn-slider">
                <Slider slidesToShow={2} autoplay={true} autoplaySpeed={3000}>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news2} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news1} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cn-img">
                      <img src={news3} alt="" />
                      <div className="cn-title">
                        <a href="/">Lorem ipsum dolor sit</a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#featured"
                  >
                    Featured News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#popular">
                    Popular News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#latest">
                    Latest News
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="featured" className="container tab-pane active">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news1} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news2} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news3} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="popular" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news4} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news5} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news1} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="latest" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news2} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news3} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news4} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#m-viewed"
                  >
                    Most Viewed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#m-read">
                    Most Read
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#m-recent">
                    Most Recent
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="m-viewed" className="container tab-pane active">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news5} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news4} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news3} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="m-read" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news2} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news1} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news3} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="m-recent" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news4} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news5} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={news1} alt="" />
                    </div>
                    <div className="tn-title">
                      <a href="/">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-news">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news1} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news2} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news3} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news4} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news5} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news1} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news2} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news3} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mn-img">
                    <img src={news4} alt="" />
                    <div className="mn-title">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mn-list">
                <h2>Read More</h2>
                <ul>
                  <li>
                    <a href="/">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="/">Pellentesque tincidunt enim libero</a>
                  </li>
                  <li>
                    <a href="/">Morbi id finibus diam vel pretium enim</a>
                  </li>
                  <li>
                    <a href="/">Duis semper sapien in eros euismod sodales</a>
                  </li>
                  <li>
                    <a href="/">Vestibulum cursus lorem nibh</a>
                  </li>
                  <li>
                    <a href="/">
                      Morbi ullamcorper vulputate metus non eleifend
                    </a>
                  </li>
                  <li>
                    <a href="/">Etiam vitae elit felis sit amet</a>
                  </li>
                  <li>
                    <a href="/">Nullam congue massa vitae quam</a>
                  </li>
                  <li>
                    <a href="/">Proin sed ante rutrum</a>
                  </li>
                  <li>
                    <a href="/">Curabitur vel lectus</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Get in Touch</h3>
                <div className="contact-info">
                  <p>
                    <i className="fa fa-map-marker"></i>123 News Street, NY, USA
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>info@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone"></i>+123-456-7890
                  </p>
                  <div className="social">
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Useful Links</h3>
                <ul>
                  <li>
                    <a href="/">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">Pellentesque</a>
                  </li>
                  <li>
                    <a href="/">Aenean vulputate</a>
                  </li>
                  <li>
                    <a href="/">Vestibulum sit amet</a>
                  </li>
                  <li>
                    <a href="/">Nam dignissim</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Quick Links</h3>
                <ul>
                  <li>
                    <a href="/">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">Pellentesque</a>
                  </li>
                  <li>
                    <a href="/">Aenean vulputate</a>
                  </li>
                  <li>
                    <a href="/">Vestibulum sit amet</a>
                  </li>
                  <li>
                    <a href="/">Nam dignissim</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Newsletter</h3>
                <div className="newsletter">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sed porta dui. Class aptent taciti sociosqu
                  </p>
                  <form>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your email here"
                    ></input>
                    <button className="btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-menu">
        <div className="container">
          <div className="f-menu">
            <a href="/">Terms of use</a>
            <a href="/">Privacy policy</a>
            <a href="/">Cookies</a>
            <a href="/">Accessibility help</a>
            <a href="/">Advertise with us</a>
            <a href="/">Contact us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>
                Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>.
                All Rights Reserved
              </p>
            </div>

            <div className="col-md-6 template-by">
              <p>
                Template By <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="/" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/slick/slick.min.js"></script>

      <script src="js/main.js"></script>
    </div>
  );
}

export default App;

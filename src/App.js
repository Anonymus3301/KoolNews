import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./bootstrap-css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import TechnologyData from "./Components/TechnologyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Sports from "./Components/SportsData";
import EntertainmentData from "./Components/EntertainmentData";
import Business from "./Components/BusinessData";
import MostPopular from "./Components/MostPopular";
import Trending from "./Components/Trending";
import WorldData from "./Components/WorldData";
import DisplayPage2 from "./Components/DisplayPage2";
import SearchPage from "./Components/Search";
import Contact from "./Components/Contact";
import ReadMore from "./Components/ReadMore";
import { useDispatch, useSelector } from "react-redux";
import { displayData, searchQ } from "./Components/actions/action";

import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  SearchOutlined,
  Twitter,
  YouTube,
} from "@material-ui/icons";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeData);

  const [searchC, setSearchC] = useState("");

  useEffect(() => {}, [myState]);
  const [r, setR] = useState("none");
  const [q, setQ] = useState("none");
  var styl = { display: q };
  var stl = { display: r };
  return (
    <Router>
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
                  <Link to="/">About</Link>
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
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3 col-md-4">
                <div className="b-logo">
                  <a href="/">
                    <img src={logo} alt="Logo"></img>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="b-search">
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchC(e.target.value);
                    }}
                  ></input>
                  <Link to="/search">
                    <button
                      onClick={() => {
                        dispatch(searchQ(searchC));
                      }}
                    >
                      <i className="fa fa-search"></i>
                      <SearchOutlined />
                    </button>
                  </Link>
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
                onClick={() => {
                  if (r === "none") {
                    setR("block");
                  } else {
                    setR("none");
                  }
                }}
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                style={stl}
                className="navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                  <Link to="/" className="nav-ite nav-link">
                    Home
                  </Link>
                  <div className="nav-ite categories-drop">
                    <span
                      onClick={() => {
                        if (q === "block") {
                          setQ("none");
                        } else {
                          setQ("block");
                        }
                      }}
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      CATEGORIES
                    </span>
                    <div style={styl} className="dropdown-menu">
                      <Link to="/display">
                        <span
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Business"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Business
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Fashion"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Fashion
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Health"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Health
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Movies"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Movies
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Politics"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Politics
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Science"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Science
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Sports"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Sports
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("Technology"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          Technology
                        </span>
                        <span
                          href="/display"
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(displayData("World"));
                            setQ("none");
                            setR("none");
                          }}
                        >
                          World
                        </span>
                      </Link>
                    </div>
                  </div>
                  <a href="/contact" className="nav-ite nav-link">
                    Contact Us
                  </a>
                </div>
                <div className="social ml-auto">
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                    <Twitter style={{ color: "white" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                    <Facebook style={{ color: "white" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-linkedin-in"></i>
                    <LinkedIn style={{ color: "white" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                    <Instagram style={{ color: "white" }} />
                  </a>
                  <a href="/">
                    <i className="fab fa-youtube"></i>
                    <YouTube style={{ color: "white" }} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/" exact>
            <div className="top-news">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 tn-left">
                    <div className="row tn-slider">
                      <Trending />
                    </div>
                  </div>
                  <div className="col-md-6 tn-right">
                    <MostPopular />
                  </div>
                </div>
              </div>
            </div>

            <div className="cat-news">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 sports-div">
                    <h2>Sports</h2>
                    <div className="row cn-slider">
                      <Sports />
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

            <div className="cat-news second">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 business-div">
                    <h2>Business</h2>
                    <div className="row cn-slider">
                      <Business />
                    </div>
                  </div>
                  <div className="col-md-6 entertainment-div">
                    <h2>Entertainment</h2>
                    <div className="row cn-slider">
                      <EntertainmentData />
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
                      <WorldData />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mn-list">
                      <h2>Read More</h2>
                      <ReadMore />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/display" exact>
            <DisplayPage2 />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
        </Switch>

        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Get in Touch</h3>
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-map-marker"></i>123 News Street, NY,
                      USA
                    </p>
                    <p>
                      <i className="fa fa-envelope"></i>
                      <Email />
                      <span>
                        jsonkusale@ce.iitr.ac.in | msoni@ce.iitr.ac.in
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-phone"></i>+123-456-7890
                    </p>
                    <div className="social">
                      <a href="/">
                        <Twitter style={{ color: "#111111" }} />
                      </a>
                      <a href="/">
                        <Facebook style={{ color: "#111111" }} />
                      </a>
                      <a href="/">
                        <LinkedIn style={{ color: "#111111" }} />
                      </a>
                      <a href="/">
                        <Instagram style={{ color: "#111111" }} />
                      </a>
                      <a href="/">
                        <YouTube style={{ color: "#111111" }} />
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
                      <a href="https://github.com/Anonymus3301/KoolNews">
                        Github Repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Github Profiles</h3>
                  <ul>
                    <li>
                      <a href="https://github.com/Anonymus3301">Jatin</a>
                    </li>
                    <li>
                      <a href="https://github.com/mukuls10">Mukul</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="title">Newsletter</h3>
                  <div className="newsletter">
                    <p>This section is not currently available</p>
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
                  Copyright &copy;{" "}
                  <a href="https://htmlcodex.com">HTML Codex</a>. All Rights
                  Reserved
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
    </Router>
  );
}

export default App;

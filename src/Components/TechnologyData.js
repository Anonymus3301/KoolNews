import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";
import { useEffect } from "react";

export default class TechnologyData extends React.Component {
  state = {
    results: [],
    config: {
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  };

  componentDidMount() {
    Axios.get(
      `
https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b5a02579e8674700a09deefa6f24af0c`
    ).then((res) => {
      this.setState({ results: res.data.articles });
      console.log(this.state.results);
    });
  }

  render() {
    return (
      <Slider {...this.state.config}>
        {this.state.results.map((val, key) => {
          if (!val.urlToImage) {
            return "";
          }
          return (
            <div className="col-md-6">
              <div className="cn-img">
                <img src={val.urlToImage} alt="" />
                <div className="cn-title">
                  <a
                    href={val.url}
                    target="_blank"
                    rel="noreferrer"
                    className="title-inner"
                  >
                    {val.title}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}

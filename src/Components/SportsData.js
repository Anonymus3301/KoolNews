import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";
import { useEffect } from "react";

export default class SportsData extends React.Component {
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
      https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
    ).then((res) => {
      this.setState({ results: res.data.results });
      console.log(this.state.results);
    });
  }

  render() {
    return (
      <Slider {...this.state.config}>
        {this.state.results.map((val, key) => {
          if (!val.multimedia) {
            return "";
          }
          return (
            <div className="col-md-6">
              <div className="cn-img">
                <img src={val.multimedia[3].url} alt="" />
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
import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";

export default class Trending extends React.Component {
  state = {
    results: [],
    config: {
      slidesToShow: 1,
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
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
    ).then((res) => {
      this.setState({ results: res.data.results });
      console.log(this.state.results);
    });
  }

  render() {
    return (
      <Slider {...this.state.config}>
        {this.state.results.map((val, key) => {
          if (!val.media[0]) {
            return "";
          }
          return (
            <div className="col-md-6 trending-div" key={key}>
              <div className="tn-img">
                <img src={val["media"][0]["media-metadata"][2]["url"]} alt="" />
                <div className="tn-title">
                  <a
                    href={val.url}
                    // target="_blank"
                    // rel="noreferrer"
                    // className="title-inner"
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

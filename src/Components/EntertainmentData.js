import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";

export default class EntertainmentData extends React.Component {
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
https://api.nytimes.com/svc/topstories/v2/theater.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
    ).then((res) => {
      this.setState({ results: res.data.results });
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
            <div className="col-md-6" key={key}>
              <div className="cn-img">
                <img src={val.multimedia[0]?.url} alt="" />
                <div className="cn-title">
                  <a
                    href={val?.url}
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

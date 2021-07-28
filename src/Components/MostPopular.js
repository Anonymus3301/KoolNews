import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.scss";
import pop_img from "../img/mostpop_img.png";

export default class MostPopular extends React.Component {
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
https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
    ).then((res) => {
      this.setState({ results: res.data.results });
      console.log(this.state.results);
    });
  }

  render() {
    var cnt = 0;
    return (
      <div className="row popular-div">
        {this.state.results.map((val, key) => {
          if (!val.media[0] || cnt > 3) {
            return "";
          } else {
            cnt++;
          }
          return (
            <div className="col-md-6" key={key}>
              <img className="pop-badge" src={pop_img} alt=""></img>
              <div className="tn-img">
                <img src={val["media"][0]["media-metadata"][1]["url"]} alt="" />
                <div className="tn-title">
                  <a href={val.url}>{val.title}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

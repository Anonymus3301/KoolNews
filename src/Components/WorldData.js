import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.scss";

var p = 0;
export default class WorldData extends React.Component {
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
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
    ).then((res) => {
      this.setState({ results: res.data.results });
    });
  }

  render() {
    return (
      <div className="row world-div">
        {this.state.results.map((val, key) => {
          if (!val.multimedia || ++p > 9) {
            return "";
          }
          return (
            <div className="col-md-4" key={key}>
              <div className="mn-img">
                <img src={val.multimedia[3].url} alt="" />
                <div className="mn-title">
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
      </div>
    );
  }
}

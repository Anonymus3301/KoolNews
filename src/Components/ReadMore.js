import React from "react";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.scss";

var p = -1;
var l = 1;
export default class ReadMore extends React.Component {
  state = {
    results: [],
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
      <ul>
        {this.state.results.map((val, key) => {
          p++;
          if (p < 10 || p > 17) {
            return "";
          }
          return (
            <li key={key}>
              <a href={val.url}>
                {val.title} | {l++}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

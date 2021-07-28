import React from "react";
import Axios from "axios";
import "../styles/animate.css";
import "../App.scss";

export default class DisplayPage extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    Axios.get(
      `
https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
    ).then((res) => {
      this.setState({ results: res.data.results });
      console.log(this.state.results);
    });
  }

  render() {
    var p = 0;
    var q = 0;
    return (
      <div id="fh5co-main">
        <div className="container">
          <div className="row">
            <div id="fh5co-board">
              <div className="of14">
                {this.state.results.map((val, key) => {
                  if (key % 4 !== 0 || !val.multimedia || p > 4) {
                    return "";
                  }
                  p++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of14">
                {this.state.results.map((val, key) => {
                  if (key % 4 !== 1 || !val.multimedia || p > 9) {
                    return "";
                  }
                  p++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of14">
                {this.state.results.map((val, key) => {
                  if (key % 4 !== 2 || !val.multimedia || p > 14) {
                    return "";
                  }
                  p++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of14">
                {this.state.results.map((val, key) => {
                  if (key % 4 !== 3 || !val.multimedia || p > 19) {
                    return "";
                  }
                  p++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="of13">
                {this.state.results.map((val, key) => {
                  if (key % 3 !== 0 || !val.multimedia || q > 5) {
                    return "";
                  }
                  q++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of13">
                {this.state.results.map((val, key) => {
                  if (key % 3 !== 1 || !val.multimedia || q > 11) {
                    return "";
                  }
                  q++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of13">
                {this.state.results.map((val, key) => {
                  if (key % 3 !== 2 || !val.multimedia || q > 17) {
                    return "";
                  }
                  q++;
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of12">
                {this.state.results.map((val, key) => {
                  if (key % 2 !== 0 || !val.multimedia) {
                    return "";
                  }
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of12">
                {this.state.results.map((val, key) => {
                  if (key % 2 !== 1 || !val.multimedia) {
                    return "";
                  }
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="of11">
                {this.state.results.map((val, key) => {
                  if (!val.multimedia) {
                    return "";
                  }
                  return (
                    <div
                      className="compdata animete-box animated bounceIn"
                      key={key}
                    >
                      <div className="span">
                        <a href={val.url}>
                          <img src={val.multimedia[0].url} alt=""></img>
                        </a>
                        <div>{val.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

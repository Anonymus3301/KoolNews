import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import "../App.scss";

function DisplayPage2() {
  const myState = useSelector((state) => state.changeData);
  const [topic, setTopic] = useState("Technology");
  const [results, setResults] = useState({});

  useEffect(() => {
    if (myState !== topic) {
      setTopic(myState);
    }
  }, [myState]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (topic === myState) {
      Axios.get(
        `
https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
      ).then((res) => {
        setResults(res.data.results);
      });
    }
  }, [topic]); // eslint-disable-line react-hooks/exhaustive-deps

  var p = 0;
  var q = 0;
  return (
    <div id="fh5co-main">
      <div className="container">
        <div className="row">
          <h2 className="Name">{myState}</h2>
          <div id="fh5co-board">
            <div className="of14">
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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
              {results &&
                results.length &&
                results.map((val, key) => {
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

export default DisplayPage2;

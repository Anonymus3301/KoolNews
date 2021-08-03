import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import "../App.scss";

function SearchPage() {
  const myState = useSelector((state) => state.changeSearch);
  const [topic, setTopic] = useState("Technology");
  const [results, setResults] = useState({});
  const [results2, setResults2] = useState({});
  const [results3, setResults3] = useState({});

  useEffect(() => {
    if (myState !== topic) {
      setTopic(myState);
    }
  }, [myState]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (topic === myState) {
      Axios.get(
        `
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
      ).then((res) => {
        setResults(res.data.response.docs);
      });
      Axios.get(
        `
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&page=2&api-key=Bz6fERmzPVOECjJFPFpQMTtfD9ejn2rb`
      ).then((res) => {
        setResults2(res.data.response.docs);
      });
    }
  }, [topic]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (results.length > 0 && results2.length > 0) {
      setResults3([...results, ...results2]);
    }
  }, [results, results2]);
  console.log(results3);
  return (
    <div id="fh5co-main">
      <div className="container">
        <div className="row">
          <h2 className="Name">"{myState}"</h2>
          <div id="fh5co-board">
            <div className="of14">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 4 !== 0 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of14">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 4 !== 1 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of14">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 4 !== 2 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of14">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 4 !== 3 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of13">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 3 !== 0 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of13">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 3 !== 1 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of13">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 3 !== 2 || val.multimedia.length === 0) {
                    return "";
                  }

                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of12">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 2 !== 0 || val.multimedia.length === 0) {
                    return "";
                  }
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of12">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (key % 2 !== 1 || val.multimedia.length === 0) {
                    return "";
                  }
                  return (
                    <div className="compdata animated bounceIn" key={key}>
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="of11">
              {results3 &&
                results3.length &&
                results3.map((val, key) => {
                  if (val.multimedia.length === 0) {
                    return "";
                  }
                  return (
                    <div
                      className="compdata animete-box animated bounceIn"
                      key={key}
                    >
                      <div className="span">
                        <a href={val.web_url}>
                          <img
                            src={
                              "https://static01.nyt.com/" +
                              val.multimedia[0].url
                            }
                            alt=""
                          ></img>
                        </a>
                        <div>{val.abstract}</div>
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

export default SearchPage;

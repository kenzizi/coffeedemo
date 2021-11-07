import React, { useState, useEffect } from "react";
import "../cssFiles/Loading.css";
import { Redirect } from "react-router-dom";

const Loading = (props) => {
  const [LoadingTime, setLoadingTime] = useState(0);
  const [menuStatus] = useState(props);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTime((LoadingTime) => LoadingTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let MenuNotFoundRedirect = <span></span>;
  if (menuStatus.status === "route-notfound")
    MenuNotFoundRedirect = <Redirect to="/loading" />;

  if (menuStatus.status === false)
    MenuNotFoundRedirect = <Redirect to="/admin-menu" />;
  return (
    <div className="loading-container">
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader large">
            <p className="loading-text">Loading ...</p>
            <p className="loading-text">please insert your menu</p>
            {LoadingTime === 2 && MenuNotFoundRedirect}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

import React, { useState, useEffect } from "react";

export default function Videos({ items = [] }) {
  const [activVideos, setActiveVideos] = useState(items[0]);

  const changeVideos = (c) => {
    let activVideos = c + 1;
    if (activVideos >= items.length) {
      activVideos = 0;
    }
    setActiveVideos(items[activVideos]);
    window.setTimeout(() => changeVideos(activVideos), 25000);
  };

  useEffect(() => {
    changeVideos(0);
  }, []);

  return (
    <video
      autoPlay
      muted
      loop
      className="myVideo"
      src={activVideos?.vid}
    ></video>
  );
}

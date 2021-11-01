import React, { useState, useEffect } from "react";

export default function Videos({ items = [], duration = 25000 }) {
  const [activeVideos, setActiveVideos] = useState(items[0]);

  const changeVideos = (c) => {
    let activeVideos = c + 1;
    if (activeVideos >= items.length) {
      activeVideos = 0;
    }
    setActiveVideos(items[activeVideos]);
    window.setTimeout(() => changeVideos(activeVideos), duration);
  };

  useEffect(() => {
    changeVideos(0);
  }, []);

  return (
    <video
      autoPlay
      muted
      loop
      className="myVideo-fullpage"
      src={activeVideos?.src}
    ></video>
  );
}

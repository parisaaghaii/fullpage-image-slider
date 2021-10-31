import React, { useState, useEffect } from "react";

export default function Images({ items = [], duration = 10000}) {
  const [activeImage, setActiveImage] = useState(items[0]);

  const changeConter = (c) => {
    let newCount = c + 1;
    if (newCount >= items.length) {
      newCount = 0;
    }
    setActiveImage(items[newCount]);
    window.setTimeout(() => changeConter(newCount), duration);
  };

  useEffect(() => {
    changeConter(0);
  }, []);

  return (
    <div
      className="imageSliderFile"
      style={{
        backgroundImage: `url(${activeImage.src})`,
        backgroundSize: `contain`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        transform: `rotate(${Math.random() * 10 - 5}deg)`,
      }}
    />
  );
}

import React from "react";
import { BoxSlider } from "./lib";

import vid2 from "./assets/video/vid2.mp4";
import vid3 from "./assets/video/vid3.mp4";
import vid4 from "./assets/video/vid4.mp4";
import pic01 from "./assets/images/pic01.jpg";
import pic02 from "./assets/images/pic02.jpg";
import pic03 from "./assets/images/pic03.jpg";
import pic04 from "./assets/images/pic04.jpg";
import pic05 from "./assets/images/pic05.jpg";
import logo from "./assets/images/logo.png";
import bg from "./bg.png";
import "./App.css";

function App() {
  const images = [
    {
      id: 1,
      img: pic04,
    },
    {
      id: 2,
      img: pic02,
    },
    {
      id: 3,
      img: pic03,
    },
    {
      id: 4,
      img: pic01,
    },
    {
      id: 5,
      img: pic05,
    },
  ];
  const texts = [
    {
      id: 1,
      title:
        "یکی از مباحث پژوهشی مهم امروزیکی از مباحث پژوهشی مهم امروزیکی از مباحث پژوهشی مهم امروزیکی از مباحث پژوهشی مهم امروز",
    },
    {
      id: 2,
      title:
        "در حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوری",
    },
    {
      id: 3,
      title:
        " تفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهاستفاده از دانش نهفته",
    },
    {
      id: 4,
      title:
        "  دددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی است",
    },
    {
      id: 5,
      title:
        " ه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهکه امروزه",
    },
  ];
  const activVideos = [
    {
      id: 1,
      vid: vid4,
    },
    {
      id: 2,
      vid: vid3,
    },
    {
      id: 3,
      vid: vid2,
    },
  ];
  return (
    <div className="page">
      <BoxSlider
        backgroundImage={bg}
        images={images}
        texts={texts}
        logo={logo}
        videos={activVideos}
        imageDuration={10000}
        textDuration={20000}
      />
    </div>
  );
}
export default App;

import React from "react";
import { BoxSlider } from "./lib";

import vid2 from "./vid2.mp4";
import vid1 from "./vid1.mp4";
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
      src: pic04,
    },
    {
      id: 2,
      src: pic02,
    },
    {
      id: 3,
      src: pic03,
    },
    {
      id: 4,
      src: pic01,
    },
    {
      id: 5,
      src: pic05,
    },
  ];
  const texts = [
    {
      id: 1,
      text:
        "یکی از مباحث پژوهشی مهم امروزیکی از مباحث پژوهشی مهم امروزیکی از مباحث پژوهشی مهم امروزیکی از مباحث پژوهشی مهم امروز",
    },
    {
      id: 2,
      text:
        "در حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوریدر حوزه فناوری اطلاعات و فناوری",
    },
    {
      id: 3,
      text:
        " تفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهتفاده از دانش نهفتهاستفاده از دانش نهفته",
    },
    {
      id: 4,
      text:
        "  دددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی اسدددددد ر داده هایی است",
    },
    {
      id: 5,
      text:
        " ه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهه امروزهکه امروزه",
    },
  ];
  const activVideos = [
    {
      id: 1,
      src: vid1,
    },
    {
      id: 2,
      src: vid2,
    },
  ];
  return (
    <div className="page">
      <BoxSlider
        backgroundImage={bg}
        images={images}
        texts={texts}
        logo={logo}
        // videos={activVideos}
        imageDuration={10000}
        textDuration={20000}
        videoDuration={25000}


        showDate={true}
        showTime={true}
        text="salam 123456 slam"
      />
    </div>
  );
}
export default App;

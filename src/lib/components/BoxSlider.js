import React from "react";
import Images from "./images";
import Texts from "./texts";
import Videos from "./videos";
import "./Design.css";

/**
 *
 * @param {Array} images [{id:"1",img:"1.jpg"}]
 * @param {Array} texts [{id:"1",title:"test"}]
 * @returns
 */
function BoxSlider({
  images = [],
  texts = [],
  videos = [],
  logo = undefined,
  backgroundImage = undefined,
  imageDuration = 10000,
  textDuration = 10000,
}) {
  return (
    <div className="body">
      {backgroundImage && (
        <style>{`body{background-image: url(${backgroundImage})}`}</style>
      )}
      {videos && videos[0] && <Videos items={videos} />}
      {logo && <img src={logo} className="logodesign" />}
      {images && images[0] && (
        <div className="imageSlid ">
          <Images items={images} duration={imageDuration} />
        </div>
      )}
      {texts && texts[0] && (
        <div className="footer">
          <div className="footer-content">
            <div className="textanime">
              <Texts items={texts} duration={textDuration} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoxSlider;

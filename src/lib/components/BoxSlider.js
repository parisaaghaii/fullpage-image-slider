import React from "react";
import Images from "./images";
import Texts from "./texts";
import Videos from "./videos";
import Showtime from "./time";
import Message from "./message";
import "../fonts/BTitr.css";
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
  timeStyle = {},
  dateStyle = {},
  textmessage = "",
  showTime = false,
  showDate = false,
  children = undefined,
  footerStyle = {},
  logoStyle = {},
  textStyle = {},
  messageboxClassName = "",
  messageClassName = "",
  dateTimeClassName = "",
  logoclassName = "",
  boxfooterclassName = "",
}) {
  return (
    <div className="body-fullPage">
      {backgroundImage && (
        <style>{`.body-fullPage{background-image: url(${backgroundImage})}`}</style>
      )}
      {textmessage && (
        <Message
          classNamemessage={messageClassName}
          text={textmessage}
          classNamemessagebox={messageboxClassName}
        />
      )}
      <Showtime
        dateStyle={dateStyle}
        timeStyle={timeStyle}
        showDate={showDate}
        showTime={showTime}
        classNametimeanddate={dateTimeClassName}
      />
      {videos && videos[0] && <Videos items={videos} />}
      {logo && (
        <img
          src={logo}
          className={`logodesign-fullpage ${logoclassName}`}
          style={logoStyle}
        />
      )}
      {images && images[0] && (
        <div className="imageSlid-fullpage ">
          <Images items={images} duration={imageDuration} />
        </div>
      )}
      {texts && texts[0] && (
        <div className="footer-fullpage">
          <div
            className={`footer-content-fullpage ${boxfooterclassName}`}
            style={footerStyle}
          >
            <div className="textanime-fullpage">
              <Texts
                items={texts}
                duration={textDuration}
                textStyle={textStyle}
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export default BoxSlider;

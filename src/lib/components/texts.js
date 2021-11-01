import React, { useState, useEffect } from "react";
/**
 *
 * @param {Array} texts [{id="1",text="matn"}]
 * @returns
 */
export default function Texts({ items = [], duration= 10000 , textStyle={}}) {
  const [text, setText] = useState(0);
  
  
  const changeTexts = (text) => {
    let newText = text + 1;
    if (newText >= items.length) {
      newText = 0;
    }
    setText(items[newText]);
    window.setTimeout(() => changeTexts(newText), duration);
  };

  useEffect(() => {
    changeTexts(0);
  }, []);

  return (
    <div
      className="textMove-fullpage"
      style={{
        animationDuration: `${duration}ms`,
        ...textStyle
      }}
    >
      {text?.text}
    </div>
  );
}

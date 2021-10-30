import React, { useState, useEffect } from "react";
/**
 *
 * @param {Array} texts [{id="1",title="matn"}]
 * @returns
 */
export default function Texts({ items = [], duration= 10000 }) {
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
      className="textMove"
      style={{
        animationDuration: `${duration}ms`,
      }}
    >
      {text?.title}
    </div>
  );
}

import React from "react";
import "./message.css";

export default function Message({ text = "", classNamemessage = "", classNamemessagebox = "" }) {
  return (
    <div className={`messagebox-fullpage ${classNamemessage}`}>
          <div className={`text-message-in-box ${classNamemessagebox}`}>
        {text}
      </div>
    </div>
  );
}

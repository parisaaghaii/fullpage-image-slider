# fullpage image slider

| fullpage image slider info : |
| ---------------------------- |
| description                  |
| install info                 |
| properties info              |
| example                      |

## Description :

This package mostly used for showing image and string , you can have array of both images and strings to show.

Also you can have array of video and play videos in the background or put background image .

## Installation :

```bash
npm i fullpage-image-slider
```

## properties :

| backgroundImage | type         | description              |
| --------------- | ------------ | ------------------------ |
| images          | array        | [{id:1 , src: "1.jpg"}]  |
| texts           | array        | [{id:1 , text: "text"}] |
| logo            | picture path | img file                 |
| videos          | array        | [{id:1 , src: "1.mp4"}]  |
| imageDuration   | time(number) | 10000                    |
| textDuration    | time(number) | 20000                    |

## Example :

```javascript
import React from "react";
import { BoxSlider } from "fullpage-image-slider";

import vid1 from "./assets/video/vid1.mp4";
import pic1 from "./assets/images/pic1.jpg";

import bg from "./bg.png";
import "./App.css";

function App() {
  const images = [
    {
      id: 1,
      src: pic1,
    },
  ];
  const texts = [
    {
      id: 1,
      text:
        "some text",
    },
  ];
  const activVideos = [
    {
      id: 1,
      src: vid1,
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

```
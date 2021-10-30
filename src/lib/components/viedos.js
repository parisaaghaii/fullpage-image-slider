import React, { useState, useEffect } from 'react';


export default function Viedos({ items = [] }) {
const [activVedio, setActiveVedio] = useState(items[0]);

const changeVedio = (c) => {
  let activVedio = c + 1;
  if (activVedio >= items.length) {
    activVedio = 0;
  }
  setActiveVedio(items[activVedio]);
  window.setTimeout(() => changeVedio(activVedio) , 25000);
};

useEffect(() => {
  changeVedio(0);
}, []);


    return (
      <video autoPlay muted loop className="myVideo" src={activVedio?.vid}>
        
      </video>
    );
}

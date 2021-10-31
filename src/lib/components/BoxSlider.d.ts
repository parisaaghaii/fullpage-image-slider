import * as React from "react";

export interface BoxSliderProps {
  textDuration?: Number;
  imageDuration?: Number;
  images?: [
    {
      id: number;
      src: File;
    }
  ];
  texts?: [
    {
      id: number;
      text: string;
    }
  ];
  videos?: [
    {
      id: number;
      src: File;
    }
  ];
  logo?: File;
  backgroundImage?: File;
  children?: React.ReactNode;
}
declare const BoxSlider: React.ForwardRefExoticComponent<
  BoxSliderProps & React.RefAttributes<unknown>
>;
export default BoxSlider;



  
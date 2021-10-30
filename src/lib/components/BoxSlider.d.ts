import * as React from "react";
 interface simplImages {
   id: number;
   img: File;
 }
 interface simplTexts {
        id: number;
        title: string;
}
interface simplVideos {
  id: number;
  vid: File;
}
export interface BoxSliderProps {
  textDuration?: Number;
  imageDuration?: Number;
  images?: simplImages[];
  texts?: simplTexts[];
  videos?: simplVideos[];
  logo?: File;
  backgroundImage?: File;
  children?: React.ReactNode;
}
declare const BoxSlider: React.ForwardRefExoticComponent<
  BoxSliderProps & React.RefAttributes<unknown>
>;
export default BoxSlider;



  
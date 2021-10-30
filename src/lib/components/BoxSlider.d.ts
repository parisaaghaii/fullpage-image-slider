import * as React from "react";
export interface BoxSliderProps {
  type?: "default" | "primary";
  label?: string;
  children?: React.ReactNode;
}
declare const BoxSlider: React.ForwardRefExoticComponent<
  BoxSliderProps & React.RefAttributes<unknown>
>;
export default BoxSlider;

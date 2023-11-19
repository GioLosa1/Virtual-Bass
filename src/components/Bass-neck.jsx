import React from "react";
import Fret from "./Frets";
import FretDot from "./Frets-with-dots";
import TwoDot from "./twodots";
import Openfret from "./OpenF";

function Bassneck() {
  return (
    <div className="bass-neck">
     

      <ul className="frets">
        
     
        <Openfret />

        <Fret />
        <Fret />
        <FretDot />
        <Fret />
        <FretDot />
        <Fret />
        <FretDot />
        <Fret />
        <FretDot />
        <Fret />
        <Fret />
        <TwoDot />
        <ul className="strings">
          <li>
            <span className="string-left G"></span>
          </li>
          <li>
            <span className="string-left D"></span>
          </li>
          <li>
            <span className="string-left A"></span>
          </li>
          <li>
            <span className="string-left E"></span>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Bassneck;

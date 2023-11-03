import React from "react";
import Fret from "./Frets";
import FretDot from "./Frets-with-dots";
import TwoDot from "./twodots";

function Bassneck() {
  return (
    <div className="bass-neck">
     

      <ul className="frets">
        
     
        <li className="first-fret">
        
          <div note="g" className="first-fret-note">
            <i class="note-name note-name-G">G</i>
          </div>
          <div note="d" className="first-fret-note">
            <i class="note-name note-name-D">D</i>
          </div>
          <div note="a" className="first-fret-note">
            <i class="note-name">A</i>
          </div>
          <div note="e" className="first-fret-note">
            <i class="note-name note-name-E">E</i>
          </div>
        </li>

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

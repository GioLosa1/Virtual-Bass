import React, { useState } from "react";

import audioG from "../assets/G.wav";
import audioD from "../assets/D.wav";
import audioA from "../assets/A.wav";

import audioG11 from "../assets/G11.wav";
import audioD21 from "../assets/D21.wav";
import audioA31 from "../assets/A31.wav";

import audioA12 from "../assets/A12.wav";
import audioE22 from "../assets/E22.wav";
import audioB32 from "../assets/B32.wav";

import audioA13 from "../assets/A13.wav";
import audioF23 from "../assets/F23.wav";
import audioC from "../assets/C.wav";

import audioB14 from "../assets/B14.wav";
import audioF24 from "../assets/F24.wav";
import audioC34 from "../assets/C34.wav";

import audioC15 from "../assets/C15.wav";
import audioG25 from "../assets/G25.wav";
import audioD35 from "../assets/D35.wav";


import audioC16 from "../assets/C16.wav";
import audioG26 from "../assets/G26.wav";
import audioD36 from "../assets/D36.wav";

import audioD17 from "../assets/D17.wav";
import audioA27 from "../assets/A27.wav";
import audioE37 from "../assets/E37.wav";

import audioD18 from "../assets/D18.wav";
import audioA28 from "../assets/A28.wav";
import audioF38 from "../assets/F38.wav";

import audioE19 from "../assets/E19.wav";
import audioB29 from "../assets/B29.wav";
import audioF39 from "../assets/F39.wav";

import audioF110 from "../assets/F110.wav";
import audioC210 from "../assets/C210.wav";
import audioG310 from "../assets/G310.wav";

import audioF111 from "../assets/F111.wav";
import audioC211 from "../assets/C211.wav";
import audioG311 from "../assets/G311.wav";


import audioG112 from "../assets/G112.wav";
import audioD212 from "../assets/D212.wav";
import audioA312 from "../assets/A312.wav";



function Bassneck() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = async (audio) => {
    if (currentAudio) {
      decreaseVolumeCurrentAudio();
    }

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const audioSource = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    audioSource.connect(gainNode);
    gainNode.connect(audioContext.destination);

    try {
      const response = await fetch(audio);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      audioSource.buffer = audioBuffer;
      audioSource.start(0);

      setCurrentAudio({ source: audioSource, gainNode });
    } catch (error) {
      console.error("Error loading audio:", error);
    }
  };

  const decreaseVolumeCurrentAudio = () => {
    if (currentAudio) {
      const { gainNode } = currentAudio;
      gainNode.gain.linearRampToValueAtTime(
        0,
        gainNode.context.currentTime + 0.5
      );
      setTimeout(() => {
        currentAudio.source.stop();
      }, 500); // Stop the current audio after decreasing volume
    }
  };
  return (
    // open fret
    <div className="bass-neck">
      <ul className="frets">
        <li className="first-fret">
          <div
            onClick={() => playAudio(audioG)}
            data-note="g"
            className="first-fret-note"
          >
            <i className="note-name note-name-G">G</i>
          </div>

          <div
            onClick={() => playAudio(audioD)}
            data-note="d"
            className="first-fret-note"
          >
            <i className="note-name note-name-D">D</i>
          </div>

          <div
            onClick={() => playAudio(audioA)}
            data-note="a"
            className="first-fret-note"
          >
            <i className="note-name">A</i>
          </div>

          <div data-note="e" className="first-fret-note">
            <i className="note-name note-name-E">E</i>
          </div>
        </li>
        {/* open fret */}

        {/* fret1 */}
        <li className="fret-li">
          <span
            onClick={() => playAudio(audioG11)}
            note="G#-1/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioD21)}
            note="D#-2/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioA31)}
            note="A#-3/1"
            className="note-name"
          ></span>

          <span note="es" className="note-name"></span>
        </li>
        {/* fret1 */}
        {/* fret2 */}
        <li className="fret-li">
          <span
            onClick={() => playAudio(audioA12 )}
            note="G#-1/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioE22)}
            note="D#-2/1"
            className="note-name"
          ></span>

          <span
         onClick={() => playAudio(audioB32)}
            note="B-3/2"
            className="note-name"
          ></span>

          <span note="es" className="note-name"></span>
        </li>
        {/* fret2 */}
        {/* fret3 */}
        <li className="fret-li">
          {" "}
          <div className="dots"></div>
          <span  onClick={() => playAudio(audioA13 )} note="es" className="note-name">
            <i></i>
          </span>
          <span  onClick={() => playAudio(audioF23 )} note="as" className="note-name">
            <i></i>
          </span>
          <span  onClick={() => playAudio(audioC )} note="b" className="note-name">
            <i></i>
          </span>
          <span note="f" className="note-name">
            <i></i>
          </span>
        </li>
        {/* fret3 */}
        {/* fret4 */}
        <li className="fret-li">
          <span
            onClick={() => playAudio(audioB14)}
            note="G#-1/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioF24)}
            note="D#-2/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioC34)}
            note="A#-3/1"
            className="note-name"
          ></span>

          <span note="es" className="note-name"></span>
        </li>
        {/* fret4 */}
        {/* fret5 */}
        <li className="fret-li">
          {" "}
          <div className="dots"></div>
          <span  onClick={() => playAudio(audioC15)} note="es" className="note-name">
            <i></i>
          </span> 
          <span  onClick={() => playAudio(audioG25)} note="as" className="note-name">
            <i></i>
          </span>
          <span  onClick={() => playAudio(audioD35)} note="b" className="note-name">
            <i></i>
          </span>
          <span  note="f" className="note-name">
            <i></i>
          </span>
        </li>
        {/* fret5 */}
        {/* fret6 */}
        <li className="fret-li">
        <span  onClick={() => playAudio(audioC16)} note="es" className="note-name">
            <i></i>
          </span> 
          <span  onClick={() => playAudio(audioG26)} note="as" className="note-name">
            <i></i>
          </span>
          <span  onClick={() => playAudio(audioD36)} note="b" className="note-name">
            <i></i>
          </span>
          <span  note="f" className="note-name">
            <i></i>
          </span>

          
        </li>
        {/* fret6*/}
        {/* fret7*/}
        <li className="fret-li">
          {" "}
          <div className="dots"></div>
          <span onClick={() => playAudio(audioD17)}  note="es" className="note-name">
            <i></i>
          </span>
          <span onClick={() => playAudio(audioA27)}  note="as" className="note-name">
            <i></i>
          </span>
          <span onClick={() => playAudio(audioE37)}  note="b" className="note-name">
            <i></i>
          </span>
          <span note="f" className="note-name">
            <i></i>
          </span>
        </li>
        {/* fret7 */}
        {/* fret8 */}
        <li className="fret-li">
          <span
            onClick={() => playAudio(audioD18)}
            note="G#-1/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioA28)}
            note="D#-2/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioF38)}
            note="A#-3/1"
            className="note-name"
          ></span>

          <span note="es" className="note-name"></span>
        </li>
        {/* fret8 */}
        {/* fret9*/}
        <li className="fret-li">
          {" "}
          <div className="dots"></div>
          <span  onClick={() => playAudio(audioE19)} note="es" className="note-name">
            <i></i>
          </span>
          <span  onClick={() => playAudio(audioB29)} note="as" className="note-name">
            <i></i>
          </span>
          <span  onClick={() => playAudio(audioF39)} note="b" className="note-name">
            <i></i>
          </span>
          <span   note="f" className="note-name">
            <i></i>
          </span>
        </li>
        {/* fret9 */}
        {/* fret10*/}
        <li className="fret-li">
          <span
            onClick={() => playAudio(audioF110)}
            note="G#-1/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioC210)}
            note="D#-2/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioG310)}
            note="A#-3/1"
            className="note-name"
          ></span>

          <span note="es" className="note-name"></span>
        </li>
        {/* fret10 */}
        {/* fret11 */}
        <li className="fret-li">
          <span
            onClick={() => playAudio(audioF111)}
            note="G#-1/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioC211)}
            note="D#-2/1"
            className="note-name"
          ></span>

          <span
            onClick={() => playAudio(audioG311)}
            note="A#-3/1"
            className="note-name"
          ></span>

          <span note="es" className="note-name"></span>
        </li>
        {/* fret11 */}
        {/* fret12 */}
        <li className="fret-li">
          {" "}
          <div className="dots-double">
            <span></span>
            <span></span>
          </div>
          <span  onClick={() => playAudio(audioG112)} note="es" className="note-name">
            <i></i>
          </span>
          <span onClick={() => playAudio(audioD212)} note="es" className="note-name">
            <i></i>
          </span>
          <span onClick={() => playAudio(audioA312)} note="es" className="note-name">
            <i></i>
          </span>
          <span  note="es" className="note-name">
            <i></i>
          </span>
        </li>
        {/* fret12 */}
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

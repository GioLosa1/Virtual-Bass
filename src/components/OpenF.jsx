import React, { useState } from "react";
import audioG from "../assets/G.wav";
import audioD from "../assets/D.mp3";
import audioA from "../assets/A.mp3";

function Openfret() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audio) => {
    if (currentAudio) {
      currentAudio.pause(); // Pause the currently playing audio
    }

    const newAudio = new Audio(audio);
    setCurrentAudio(newAudio); // Set the new audio as the current audio
    newAudio.play();
  };

  return (
    <li className="first-fret">
      <div onClick={() => playAudio(audioG)} data-note="g" className="first-fret-note">
        <i className="note-name note-name-G">G</i>
      </div>

      <div onClick={() => playAudio(audioD)} data-note="d" className="first-fret-note">
        <i className="note-name note-name-D">D</i>
      </div>

      <div onClick={() => playAudio(audioA)} data-note="a" className="first-fret-note">
        <i className="note-name">A</i>
      </div>

      <div data-note="e" className="first-fret-note">
        <i className="note-name note-name-E">E</i>
      </div>
    </li>
  );
}

export default Openfret;

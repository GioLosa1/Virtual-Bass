import React, { useState} from "react";
import audioG from "../assets/G.wav";
import audioD from "../assets/D.wav";
import audioA from "../assets/A.wav";

function Openfret() {
    const [currentAudio, setCurrentAudio] = useState(null);

    const playAudio = async (audio) => {
      if (currentAudio) {
        decreaseVolumeCurrentAudio();
      }
  
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
        gainNode.gain.linearRampToValueAtTime(0, gainNode.context.currentTime + 0.5);
        setTimeout(() => {
          currentAudio.source.stop();
        }, 500); // Stop the current audio after decreasing volume
      }
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

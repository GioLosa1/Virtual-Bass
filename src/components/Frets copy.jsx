import React, { useState } from "react";
import audioG11 from "../assets/G11.wav";
import audioD21 from "../assets/D21.wav";
import audioA31 from "../assets/A31.wav";



function Fret1() {
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
     

     
    <li className="fret-li" >
     
      <span  onClick={() => playAudio(audioG11)} note="G#-1/1"  className="note-name">
       
      </span>
      
      <span  onClick={() => playAudio(audioD21)} note="D#-2/1"  className="note-name">
       
      </span>

      <span  onClick={() => playAudio(audioA31)} note="A#-3/1"  className="note-name">
       
      </span>
     
     <span note="es" className="note-name">
       
     </span>
      
   </li> 
  );
}

export default Fret1;

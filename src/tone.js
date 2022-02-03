import * as Tone from "tone";
// import sound from "./sounds/C4.mp3";

const audioMap = {
  C4: "C4.mp3",
  D4: "D4.mp3",
  E4: "E4.mp3",
  F4: "F4.mp3",
  G4: "G4.mp3",
  A4: "A4.mp3",
  B4: "B4.mp3",
  C5: "C5.mp3",
  D5: "D5.mp3",
  E5: "E5.mp3",
  F5: "F5.mp3",
  G5: "G5.mp3",
  A5: "A5.mp3",
  B5: "B5.mp3",
};

const notes = {
  a: "C4",
  s: "D4",
  d: "E4",
  f: "F4",
  g: "G4",
  h: "A4",
  j: "B4",
  q: "C5",
  w: "D5",
  e: "E5",
  r: "F5",
  t: "G5",
  y: "A5",
  u: "B5",
};

const onSamplerLoad1 = (sampler) => {
  window.addEventListener("keypress", (e) => {
    console.log(e.key);
    sampler.triggerAttackRelease("C4", 4);
  });
};

// const onSamplerLoad2 = (sampler) => {
//   window.addEventListener("keypress", (e) => {
//     console.log(e.key);
//     sampler.triggerAttackRelease("E4", 4);
//   });
// };

// const onSamplerLoad3 = (sampler) => {
//   window.addEventListener("keypress", (e) => {
//     console.log(e.key);
//     sampler.triggerAttackRelease("G4", 4);
//   });
// };

function initializeAudio() {
  const sampler1 = new Tone.Sampler({
    urls: audioMap,
    onload: () => onSamplerLoad1(sampler1),
    baseUrl: "/sounds/",
  }).toDestination();

  const sampler2 = new Tone.Sampler({
    urls: audioMap,
    onload: () => onSamplerLoad2(sampler2),
    baseUrl: "/sounds/",
  }).toDestination();

  const sampler3 = new Tone.Sampler({
    urls: audioMap,
    onload: () => onSamplerLoad3(sampler3),
    baseUrl: "/sounds/",
  }).toDestination();
}

const onLoad = () => {
  const $audioStartButton = document.getElementById("audio");
  $audioStartButton.disabled = false;

  $audioStartButton.addEventListener(
    "click",
    () => {
      initializeAudio();
      Tone.Transport.start();
      $audioStartButton.disabled = true;
      $audioStartButton.textContent = "playing...";
    },
    false
  );
};

window.addEventListener("load", onLoad);

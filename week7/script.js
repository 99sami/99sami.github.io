const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);
// --------------
// My logic for playing sound
// first i need to fetch the audio for right button to play
const playButton = document.querySelector("#play-button");
console.log(playButton);
// then i will listen to the click events on that button
playButton.addEventListener("click", playAudio);

// whenever cilck happens, i will play audio
function playAudio() {
  airportAudio.play();
}

// My logic for playing sound
// first i need to fetch the audio for right button to pause
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// then i will listen to the click events on that button
pauseButton.addEventListener("click", pauseAudio);

// whenever cilck happens, i will pause audio
function pauseAudio() {
  airportAudio.pause();
}

// My logic for playing sound
// first i need to fetch the audio for right button to pop
const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);
// then i will listen to the click events on that button
popButton.addEventListener("click", popAudio);

// whenever cilck happens, i will pause audio
function popAudio() {
  popSound.play();
}

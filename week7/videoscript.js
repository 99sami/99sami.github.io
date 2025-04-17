const myVideo = document.querySelector("#my-video");
console.log(myVideo);
// --------------
// My logic for playing sound
// first i need to fetch the audio for right button to play
const playButton = document.querySelector("#play-button");
console.log(playButton);
// then i will listen to the click events on that button
playButton.addEventListener("click", playVideo);

// whenever cilck happens, i will play audio
function playVideo() {
  myVideo.play();
}

// My logic for playing sound
// first i need to fetch the audio for right button to pause
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// then i will listen to the click events on that button
pauseButton.addEventListener("click", pauseVideo);

// whenever cilck happens, i will pause audio
function pauseVideo() {
  myVideo.pause();
}

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

// whenever cilck happens, i will pause audio
function toggleVideo() {
  if (myVideo.paused || myVideo.Video.eded) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    myVideo.Video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}

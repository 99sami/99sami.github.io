// fetch video so that we can work with it //

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// play pause logic //

// 1. fetch the right button to play n pause ///
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);
// 2. listen to click event on the button //
playPauseButton.addEventListener("click", togglePlay);

// 3. write the function that will do play and pause //
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.pause();
  }
}
// ------------------------------------------------------//

// mute unmute logic//
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = false;
  } else {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = true;
  }
}

// ----------------------------------------------------//
// fastforward logic//
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

const fastForwardImg = document.querySelector("#fast-forward-img");
console.log(muteUnmuteImg);

fastForwardButton.addEventListener("click", togglePlay);

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.45;
}
//---------------------------------------//

// fullscreen button //

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// likes button //

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

const likesContainer = document.querySelector("#likes");
console.log(likesContainer);

let likes = 0;

heartButton.addEventListener("click", updateLikes);

function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}

// --------------------------------------------------------------//

// progress bar lorgic//

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  // console.log(progres);// 
  progressBar.style.width = progress + "%";
}

//-----------------------------------------------------------//
// playlist option//
// const playlist = [
//     {
//         id: 1,
//         name: "stardust",
//         src: "stardust.mp4",
//     },
//     {
//         id: 2, 
//         name: "zenscape",
//         src: "zenscape.mp4"

//     },
// {
//     id: 3,
//     name: "Music video",
//     src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
// },

// ]; 




// const zenscapeButton = document.querySelector("#zenscape-vid-button");
// console.log(zenscapeButton);

// stardustButton.addEventListener("click", function chooseZenscape()

// {
//     chooseVideo(1);
// }; 


const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseStardust()

{
    chooseVideo(2);
}; 



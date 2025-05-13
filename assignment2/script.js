// const video = document.querySelector("#custom-video-player");

// // const playPauseBtn = document.querySelector("#play-pause-btn");
// // console.log ("play-pause-btn");
// // const playPauseImg = document.querySelector("#play-pause-img");
// // console.log ("playPauseImg");

// // playPauseBtn.addEventListener("click, togglePlay");

// // const playPauseImg = document.querySelector("#play-pause-img");
// const progressBar = document.querySelector("#progress-bar-fill");
// video.removeAttribute("controls");
// // playPauseBtn.addEventListener("click", togglePlayPause);
// video.addEventListener("timeupdate", updateProgressBar);
// function togglePlayPause() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
//   } else {
//     video.pause();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
//   }
// }
// function updateProgressBar() {
//   const value = (video.currentTime / video.duration) * 100;
//   progressBar.style.width = value + "%";
// }

// // Add other functionalities here
// // Get the video element and play/pause button/image

// // const playPauseBtn = document.querySelector("#play-pause-btn");
// // console.log ("playPauseBtn");

// // const playPauseImg = document.querySelector("#play-pause-img");

// // console.log ("playPauseImg");

// // // Function to toggle play and pause
// // function togglePlayPause() {
// //   if (video.paused) {
// //     video.play();
// //     // Change icon to pause when playing
// //     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
// //   } else {
// //     video.pause();
// //     // Change icon to play when paused
// //     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
// //   }
// // }

// // mute button funtions //

// const muteBtn = document.getElementById("mute-btn");
// console.log("muteBtn");

// muteBtn.addEventListener("click", () => {
//   video.muted = !video.muted;
//   muteImg.src = video.muted
//     ? "https://img.icons8.com/ios-glyphs/30/mute--v1.png"
//     : "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
// });

// // Get elements for play/pause button
// const playPauseBtn = document.getElementById("play-pause-btn");
// const playPauseImg = document.getElementById("play-pause-img");

// // Toggle play/pause function
// // playPauseBtn.addEventListener("click", () => {
// //   if (video.paused) {
// //     video.play();
// //     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Pause icon
// //   } else {
// //     video.pause();
// //     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"; // Play icon
// //   }
// // });

// // fullscreen functions //

// Gather all  elements //
const video = document.getElementById("custom-video-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const playPauseImg = document.getElementById("play-pause-img");
const muteBtn = document.getElementById("mute-btn");
const muteImg = document.getElementById("mute-img");
const fullscreenBtn = document.getElementById("fullscreen-btn");

// Play/Pause functions //
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Pause icon
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"; // Play icon
  }
});

// Mute/Unmute functions //
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteImg.src = video.muted
    ? "https://img.icons8.com/ios-glyphs/30/mute--v1.png"
    : "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
});

// Fullscreen function //
fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

// bounce function //

window.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("main-title");
  title.classList.add("bounce");
});
//  pull class//

const title = document.getElementById("main-title");

title.addEventListener("click", () => {
  // Remove the class  to allow re-triggering
  title.classList.remove("bounce");

  // Trigger  to restart animation //
  void title.offsetWidth;

  // Add the class back to bounce again
  title.classList.add("bounce");
});

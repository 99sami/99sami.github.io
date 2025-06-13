var card1 = document.querySelectorAll(".card")[0];
var card2 = document.querySelectorAll(".card")[1];
var card3 = document.querySelectorAll(".card")[2];
var card4 = document.querySelectorAll(".card")[3];
var card5 = document.querySelectorAll(".card")[4];
var card6 = document.querySelectorAll(".card")[5];

// Img 1 (Uchiha) flip events //
card1.addEventListener("mouseenter", function () {
  this.classList.add("flip");
});
card1.addEventListener("mouseleave", function () {
  this.classList.remove("flip");
});

// Img 2 (Hyuga) flip events //
card2.addEventListener("mouseenter", function () {
  this.classList.add("flip");
});
card2.addEventListener("mouseleave", function () {
  this.classList.remove("flip");
});

// Img 3 (Nara) flip events //
card3.addEventListener("mouseenter", function () {
  this.classList.add("flip");
});
card3.addEventListener("mouseleave", function () {
  this.classList.remove("flip");
});

// Img (akamichi) 4 flip events //
card4.addEventListener("mouseenter", function () {
  this.classList.add("flip");
});
card4.addEventListener("mouseleave", function () {
  this.classList.remove("flip");
});

// Img 5 (Aburame) flip events //
card5.addEventListener("mouseenter", function () {
  this.classList.add("flip");
});
card5.addEventListener("mouseleave", function () {
  this.classList.remove("flip");
});

// Img 6 (uzumaki) flip events //
card6.addEventListener("mouseenter", function () {
  this.classList.add("flip");
});
card6.addEventListener("mouseleave", function () {
  this.classList.remove("flip");
});

// yes this took a long time but im such the type of person that prefers to write each one indiidually than do them all in one go

// The chosen “hover” function paired with the flip animation on each image I created provides immediate visual
// feedback which was the intent of my designs. The ‘before and after’ style aligns with the theme of discovery that this website is based off,
// prompting users to explore hidden depths of each clan through visual ques and responsive UI. A recurring ability in the show is reveals of
// secrets and abilities and i like to think the flip cards bring the same signature motif

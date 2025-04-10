const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "this is a new heading";
topHeading.style.color = "crimson";

const allParas = document.querySelector("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  console.log(allParas[i], textContent);
  allParas[i].style.border = "1px solid green";
  allParas[i].style.backgroundColor = "beige";
}

const myFirstPara = document.querySelector("p");
console.log(myFirstPara);
console.log(myFirstPara.textContent);

const myFirstSub = document.querySelector("#first-subheading");
console.log(myFirstSub);
console.log(myFirstSub.textContent);

// let a = 20;
// let b = 10;

// function add(val1, val2) {
//   let total = val1 + val2;
//   console.log(total);
//   return total;
// }
// function whatIsMyGrade(marks) {
//   if (marks > 80) {
//     return "HD";
//   } else if (marks < 40) {
//     return "FAIL";
//   } else {
//     return "PASS";
//   }
// }
// function subtract(val1, val2) {
//   let res = val1 - val2;
//   return res;
// }
// let score = 57;
// let msg = whatIsMyGrade(score);
// console.log(msg);

// let c = add(a, b);
// console.log(c);
// a = 40;
// b = 14;
// c = add(a, b);
// c = add(34, 67);
// // console.log(c);

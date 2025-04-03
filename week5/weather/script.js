function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp);
  let temp = myTemp.value;
  console.log("Temp value is", temp);
  if (temp < 10) console.log("its freezing");
}

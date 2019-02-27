var element = document.getElementById("data");
var button = document.getElementById("mybtn");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pari(number) {
  if (number%2==0) {
    return true;
  }
  return false;
}

var myarr = [];

button.addEventListener("click", function() {

  var numRnd = getRandom(1, 101);

  if (pari(numRnd)) {
    element.style.color = "black";
    element.style.background = "red";
  } else {
    element.style.color = "red";
    element.style.background = "black";
  }

  myarr.push(numRnd);
  element.innerHTML += numRnd + " ";
  button.innerHTML = "Genera numero " + myarr[i];
});

window.onload = function () {

document.getElementById("dark").addEventListener("click", function onclick() { 
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white'; 
});
document.getElementById("light").addEventListener("click", function onclick() { 
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black'; 
});

document.getElementById("increase").addEventListener("click", function onclick() {
  document.body.style.fontSize = "40px";
});

document.getElementById("default").addEventListener("click", function onclick() {
  document.body.style.fontSize = "20px";
});

}
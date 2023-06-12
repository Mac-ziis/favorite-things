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

let generate = document.getElementById('btn');
generate.addEventListener('click', () => {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let random_num= Math.floor(Math.random()*(max-min) + +min);
    document.getElementById('output').innerHTML = ` =  ${random_num}`;
});    

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", setBg);
setBg();
const setFc = () => {
  const randomFont = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.color = "#" + randomFont;
  color.innerHTML = "#" + randomFont;
}

btn.addEventListener("click", setFc);
setFc();

// let body = document.querySelector("body");
// body.onmouseover = function() {
//   document.body.style.backgroundColor = "#" + randomcolor;
// }
}
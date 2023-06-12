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


// var link = document.getElementById('getNumber');
// link.onclick = getNumber;

// function getNumber() {
//   var minNumber = 0;
//   var maxNumber = 100;
//   var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
//   $('#myNumber').html(randomNumber);
//   return false;
// };

let generate = document.getElementById('btn');
generate.addEventListener('click', () => {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let random_num= Math.floor(Math.random()*(max-min) + +min);
    document.getElementById('output').innerHTML = ` =  ${random_num}`;
})    

}

let rows = window.prompt("enter  # of rows");
let columms = window.prompt("enter # of columms");
let = symbol = window.prompt("Enter a Symbol");


for(let i = 1; i <= rows; i += 1){
  for(let j = 1; j <= columms; j += 1){
    document.getElementById("rectangle").innerHTML += symbol;
  }
  document.getElementById("rectangle").innerHTML += "<br>";
  
}
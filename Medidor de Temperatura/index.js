
document.getElementById("submit").onclick=function(){
let temp;
if(document.getElementById("Cbutton").checked){
temp = document.getElementById("textbox").value;
temp = Number(temp);
temp = toCelsius(temp);
document.getElementById("display").innerHTML = temp + "°C";

}
else if(document.getElementById("Fbutton").checked){
 temp = document.getElementById("textbox").value;
temp = Number(temp);
temp = toFahrenheit(temp);
document.getElementById("display").innerHTML = temp + "°F";



}
else{
    document.getElementById("display").innerHTML = "Selecione uma das Unidades.";
}

}
function toCelsius(temp){
    return(temp - 32)*(5/9);

}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;

}

let username;
let age= window.prompt("How Old are your mother?");

age=Number(age);
age +=1;

console.log("Your mother have" , age,  "years" );

document.getElementById("button").onclick= function(){
    username =document.getElementById("text").value;
   document.getElementById("penis").innerHTML= username;


}
let a;
let b;
let c;

document.getElementById("button").onclick= function(){

    a = document.getElementById("Atext").value;
    a = Number(a);
    b = document.getElementById("Btext").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
document.getElementById("Clabel").innerHTML = "Side C: " + c;
}


username = "Jonatas";
items = 3;
total = "$1000"


let text = 
`hello ${username}<br>
you have ${items} items in your cart<br>
your total is $${total}<br>`;

document.getElementById("Template").innerHTML = text;

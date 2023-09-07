let area;
let largura;
let altura;


altura= window.prompt("Digite a Altura");
largura= window.prompt("Digite a Largura");

area = getArea(largura, altura);
console.log("A area é: " , area);

function getArea(largura, altura){
  let result = largura*altura;
  return result;
}
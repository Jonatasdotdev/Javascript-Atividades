let frutas = ["maçã", "manga", "uva", "jambo"];
let vegetais = ["cebola" , "cenoura", "pimentão" , "alface"];
let carnes = ["porco" , "peixe" , "filé", "frango"];

let listacomida = [frutas,vegetais,carnes]; //  2D array
listacomida[2][2] = "Boi"; //adiciona o elemento no indice

for(let lista  of  listacomida){   //nested for loop para mostrar os elementos da array 2D
    for(let comida of lista ){
        console.log(comida);
    }
}
const answear = Math.floor(Math.random() * 10 +1);
let guesses = 0;

document.getElementById("submitbtn").onclick= function(){

    let guess=document.getElementById("guessF").value
    guesses+=1;

    if(guess == answear){

        alert(`${answear} is the number. it took you ${guesses} guesses`);
    }
    else if(guesses < answear){
        alert("Too Low");

    }
    else{
        alert("Retrocede the number");

    }
}
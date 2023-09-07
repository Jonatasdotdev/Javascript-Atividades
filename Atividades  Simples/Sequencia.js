
let sequence = [1296, 4];
let currentIndex = 1;


const limit = 10000; 


while (sequence[currentIndex] <= limit) {
 
  if (currentIndex % 2 === 0) {
    sequence.push(Math.pow(2, currentIndex / 2));
  } else {
    sequence.push(Math.pow(6, (currentIndex + 1) / 2));
  }
  currentIndex++;
}


console.log("Sequência:");
console.log(sequence);


console.log("A sequência vai até o número: " + sequence[sequence.length - 1]);

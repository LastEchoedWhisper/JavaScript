let hash = "";
for (let i = 0; i < 7; i++) {
    hash = hash + "#";
    console.log(hash);
}

//EXCERCISE

function fizzBuzz(number, expression) {
    for(let i = 0; i < 100; i++){
        if(number % expression == 0){
            console.log(`${i} ${expression}`)
        }
    }
    
};


//Jason's Code for FizzBuzz
function fizzbuzz(arrayOfPairs) {
    for (i = 1; i < 100; i++) {
      let result = i + ' ';
      arrayOfPairs.forEach(pair => {
        const divisible = (i % Object.keys(pair)[0]) == 0;
        if (divisible) {
          result = result + Object.values(pair)[0];
        }
      });
      console.log(result);
    }
  }
  
  const pairs = [
    { 3: 'fizz' },
    { 5: 'buzz' },
    { 21: 'cheers' },
    { 50: 'cent' }
    // Add more pairs here!
  ];
  
  // Call the function
  fizzbuzz(pairs);

// END OF CODE

function chessBoard() {
    let line = "# # # #";
    for (let i = 0; i < 8; i++){
        console.log(line);
    }
};

//ITERATING OVER AN ARRAY

let vacationSpots = ['Tokyo','LA','NY'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(vacationSpots[i])
};

//CARDS WHILE LOOP
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Club';

while(currentCard !== 'Spade'){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('Found a Spade!')

//ITERATING WITH MAP

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

let secretMessage = animals.map(function(item){
  return item[0]
})

console.log(secretMessage.join('')); //Returns Hello World

// DIFFERENT EXAMPLE, BUT SAME CONCEPT

let bigNumbers = [100, 200, 300, 400, 500];

let smallNumbers = bigNumbers.map(function(number){
  return number / 100;
})
let scores = [90, 85, 99, 100, 10, 15, 24, 39, 10, 77];

let count = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] += 20;
  } else if (scores[i] > 90) {
    scores[i] = 90;
  }
  scores[i] >= 50 ? count++ : null;
}

console.log(count)
for(let score of scores){
    console.log(score);
}

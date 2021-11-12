let iterations = 0;
top:
for (let i = 0; i < 5; i++) {
  for (let j=0; j < 5; j++){
    iterations++;
    if (i===2 && j ===2) {
      break top;
    }
  }
}
console.log(iterations);

let values = [23, 41, 12, 15, 20, 100, 35];

// find all the odd numbers in the array
let arr = values.filter(value => {
  if (value % 2 !==0) {
    return value;
  }
});
console.log(arr);

// convert above arrow function to regular function
function getOdd(value) {
  if (value % 2 !== 0) {
    return value;
  }
}
console.log(arr);
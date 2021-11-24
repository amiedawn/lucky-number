function sortArray(array) {
  let done = true;
  while (done) {
    done = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = true;
        var currentNum = array[i - 1];
        array[i - 1] = array[i];
        array[i] = currentNum;
      }
    }
  }
  return array;
}

var arrNumbers = [4, 10, 6, 2, 8];
sortArray(arrNumbers);
console.log(arrNumbers);

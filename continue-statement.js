let s = 'This is a JavaScript continue statement demo.';
let counter = 0;
for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) != 's') {
    continue;
  }
  counter++;
}
console.log('The number of s found in the string is ' + counter);
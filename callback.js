// class example:
// let order = (call_production) => {
//   console.log('order placed');
//   call_production
// }
// let production = () => {console.log("production has started")};
// order(production);

// practice exercise: my solution
let eatBreakfast = (goToOffice) => {
  console.log('eat breakfast first');
  goToOffice;
}

let office = () => {console.log("go to office")};
  eatBreakfast(office);

// practice exercise: correct solution
  
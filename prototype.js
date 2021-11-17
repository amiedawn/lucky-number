let superobj = {
  color: 'red'
};

let subobj = {
  height: 'medium'
};
 
subobj.__proto__= superobj;

console.log(subobj.color); // red
// Object.keys 
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const result = Object.entries(bottle);
// console.log(result);

console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 150;
bottle.height = 12;
console.log(bottle);
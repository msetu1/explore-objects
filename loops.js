// loops for in and for of 
// array is for of using
const numbers = [12, 45, 67, 98, 44, 77, 15];
for (const number of numbers) {
    // console.log(numbers)
};
const phones = { name: 'samsung', color: 'black', price: 2000, model: 'BE2017' };
/* const keys = Object.keys(phones)
for (const key of keys) {
    console.log(key);

} */
for (const key in phones) {
    console.log(key);
}
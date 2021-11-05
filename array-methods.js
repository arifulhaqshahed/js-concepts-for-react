const products = [
    {name: 'laptop', price: 70000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'samsung', color: 'golden'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'yellow'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
    {name: 'sunglass', price: 2000, brand: 'ribon', color: 'black'}
]

// map .return an array
const brands = products.map(product => product.address);
console.log(brands);

// foreach . doesn't return anything.
// products.forEach(product => console.log(product.color));


// filter . return an array of objects which fullfil the condition
// const item = products.filter(product => product.price === 2000);
// console.log(item);
/* 
const specificName = products.filter(product => product.name.includes('j'));
console.log(specificName);
 */

// find . return the first object mathced with the condition.
/* const firstMatched = products.find(product => product.name.includes('a'));
console.log(firstMatched);
 */


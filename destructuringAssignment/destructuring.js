let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; //  "rest" syntax: It's a way to gather up the 
// remaining elements from an array after you've assigned some elements to specific variables.

console.log(rest);
// Expected output: Array [30, 40, 50]

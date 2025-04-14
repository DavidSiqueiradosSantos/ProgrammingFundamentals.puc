// Forma de interação
console.log("\n>>>>>>> Forma de interação <<<<<<<<\n")

var MeuSet = new Set();

MeuSet.add(1);
MeuSet.add(3);
MeuSet.add(3);
MeuSet.add("texto");
var o = { a: 1, b: 2 };
MeuSet.add(o);

for (let item of MeuSet)
    console.log(item);

// Remoção de valores duplicados em um Array
console.log("\n>>>>>>> Remoção de valores duplicados <<<<<<<<\n")
const num = [2, 6, 4, 8, 59, 1, 5, 2, 4, 4, 4, 86, 52]

console.log([...new Set(num)]);
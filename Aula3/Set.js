// Set não deixa repetir a mesma operação.(Exemplo)
var Myset = new Set();

Myset.add(0);
console.log(Myset);

Myset.add(1);
console.log(Myset);

Myset.add(2);
console.log(Myset);

Myset.add(2);
console.log(Myset);

Myset.add(3);
console.log(Myset);

Myset.add(4);
console.log(Myset);

Myset.add(4);
console.log(Myset);
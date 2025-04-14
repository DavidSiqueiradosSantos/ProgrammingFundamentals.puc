// Map é uma estrutura de dados muito útil que permite armazenar pares de chave e valor

// set(chave, valor): Adiciona ou atualiza um par chave-valor.
// get(chave): Obtém o valor associado a uma chave.
// has(chave): Verifica se a chave existe.
// delete(chave): Remove a chave e o valor associado.   
// clear(): Remove todos os pares de chave-valor.
const pessoa  = new Map()

pessoa.set(1, {nome: 'David', celular: "119876432", endereco: "Rua número 1", idade: "23"});
// pessoa.has('David');
pessoa.set(2, {nome: "Ellen", celular: "119854627", endereco: "Rua número 2", idade: "24"});
// pessoa.delete('Ellen')

console.log(pessoa.get(1));
console.log(pessoa.has(1));

console.log(pessoa.get(2));
console.log(pessoa.has(2));
console.log("\nTamanho do número de chaves criadas:\n" + pessoa.size);
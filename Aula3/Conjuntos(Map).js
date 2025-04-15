// Cria um novo Map chamado MyMap
const MyMap = new Map();

// Adiciona um par chave-valor: chave = 0, valor = "zero"
MyMap.set(0, "zero");

// Adiciona outro par chave-valor: chave = 1, valor = "Um"
MyMap.set(1, "Um");

// Itera sobre os pares chave-valor do Map
// Cada item do Map é um array [chave, valor]
// Aqui usamos desestruturação: [key, value]
for (const [key, value] of MyMap) {
    console.log(key + ' - ' + value);
    // Saída:
    // 0 - zero
    // 1 - Um
}

// Itera apenas sobre as chaves do Map
for (const key of MyMap.keys()) {
    console.log(key);
    // Saída:
    // 0
    // 1
}
var Matriz = [];

Matriz[0] = [15, 20, 30, 45, 50];
Matriz[1] = [24, 26, 12, 10, 69];

// Usando um loop para imprimir cada linha separada por uma quebra de linha
for (var i = 0; i < Matriz.length; i++) {
    console.log(Matriz[i].join(' '));  // "join" vai unir os elementos de cada linha com espaço
}

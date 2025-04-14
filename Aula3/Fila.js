// Definindo a classe Queue (Fila)
class Queue {
    constructor() {
        // Inicializa a fila com um array vazio
        this.items = [];
    }

    // Adiciona um elemento ao final da fila
    enqueue(element) {
        this.items.push(element);
    }

    // Remove e retorna o primeiro elemento da fila (o que está há mais tempo)
    dequeue() {
        return this.items.shift();
    }

    // Retorna o primeiro elemento da fila, sem remover
    peek() {
        if (this.items.length == 0)
            return undefined; // Se estiver vazia, retorna undefined
        else
            return this.items[0]; // Caso contrário, retorna o primeiro
    }

    // Verifica se a fila está vazia
    IsEmpty() {
        return this.items.length === 0;
    }

    // Remove todos os elementos da fila
    clear() {
        this.items = [];
    }

    // Retorna o número de elementos da fila
    size() {
        return this.items.length;
    }
}

let fila = new Queue();
fila.enqueue(20);
fila.enqueue(50);
fila.enqueue(40);
console.log(fila.dequeue()); // 10
console.log(fila.peek());    // 20
console.log(fila.size());
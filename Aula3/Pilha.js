// Definindo a classe Stack (Pilha)
class Stack {
    // O construtor inicializa a pilha com um array vazio.
    constructor() {
        this.items = [];  // Cria uma lista vazia para armazenar os elementos da pilha.
    }

    // O método 'push' adiciona um novo elemento ao topo da pilha.
    push(element) {
        this.items.push(element);  // Adiciona o elemento no final do array (topo da pilha).
    }

    // O método 'pop' remove o elemento do topo da pilha e o retorna.
    pop() {
        return this.items.pop();  // Remove e retorna o último elemento do array (topo da pilha).
    }

    // O método 'peek' retorna o elemento do topo da pilha sem removê-lo.
    peek() {
        return this.items[this.items.length - 1];  // Retorna o último elemento do array (topo), sem removê-lo.
    }

    // O método 'isEmpty' verifica se a pilha está vazia, retornando verdadeiro ou falso.
    isEmpty() {
        return this.items.length === 0;  // Se o comprimento do array for 0, a pilha está vazia.
    }

    // O método 'clear' remove todos os elementos da pilha.
    clear() {
        this.items = [];  // Substitui o array por um novo, removendo todos os elementos da pilha.
    }

    // O método 'size' retorna o número de elementos presentes na pilha.
    size() {
        return this.items.length;  // Retorna o comprimento do array, ou seja, o número de elementos na pilha.
    }
}

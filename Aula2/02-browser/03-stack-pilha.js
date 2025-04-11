// Stack ou Pilha (LIFO - Last In, First Out)
class Stack {
    constructor() {
        // Cria uma estrutura interna (array) para armazenar os itens da pilha
        this.items = [];
    }

    // Adiciona um novo elemento no topo da pilha
    push(element) {
        this.items.push(element);
    }

    // Remove o elemento do topo da pilha e o retorna
    pop() {
        // Se a pilha estiver vazia, retorna null
        if (this.items.length == 0) return null;

        // Remove e retorna o último item adicionado (topo da pilha)
        return this.items.pop();
    }

    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length == 0;
    }

    // Retorna o número de elementos na pilha
    size() {
        return this.items.length;
    }

    // Esvazia a pilha
    clear() {
        this.items = [];
    }

    // Exibe os elementos atuais da pilha no console
    print() {
        console.log(this.items);
    }
}

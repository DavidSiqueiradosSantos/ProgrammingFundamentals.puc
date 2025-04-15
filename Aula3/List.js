// •add(e): insere um elemento no final da lista
// •add(index, e): insere um elemento em determinada posição (index) da lista
// •get(index)/set(index, e): get/set o elemento na posição index
// •remove(e): remove o elemento da lista
// •isEmpty(): retorna truese a lista está vazia
// •size(): retorna o número de elementos armazenados na lista
// •contains(e): retorna truese a lista contém o elemento
// •indexOf(e): retorna a posição onde o elemento está na lista
// •clear(): remove todos os elementos da lista

// Cada nó da lista
class Node {
    constructor(value) {
        this.value = value;   // Valor do nó
        this.next = null;     // Referência para o próximo nó (inicialmente nulo)
    }
}

// Lista encadeada
class LinkedList {
    constructor() {
        this.head = null; // Início da lista (primeiro nó)
        this.size = 0;    // Quantidade de nós na lista
    }

    // Adiciona um novo nó no final
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode; // Se a lista está vazia, o novo nó vira o head
        } else {
            let current = this.head;

            // Navega até o último nó
            while (current.next) {
                current = current.next;
            }

            current.next = newNode; // Adiciona o novo nó no final
        }

        this.size++;
    }

    // Imprime todos os elementos da lista
    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }

        result += "null"; // Fim da lista
        console.log(result);
    }
}

const lista = new LinkedList();

lista.append(10);
lista.append(20);
lista.append(30);
lista.print(); // Saída: 10 -> 20 -> 30 -> null

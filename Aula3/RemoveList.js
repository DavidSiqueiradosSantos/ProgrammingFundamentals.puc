// Cada nó da lista
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;  // Para lista duplamente encadeada
    }
}

// Lista encadeada simples
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Adiciona um novo nó no final
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Remover do início (head)
    removeFirst() {
        if (!this.head) return; // Lista vazia
        this.head = this.head.next;
        this.size--;
    }

    // Remover do final
    removeLast() {
        if (!this.head) return; // Lista vazia
        if (this.size === 1) {
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
    }

    // Remover um valor específico
    remove(value) {
        if (!this.head) return; // Lista vazia
        if (this.head.value === value) {
            this.head = this.head.next; // Remove o primeiro nó
            this.size--;
            return;
        }
        let current = this.head;
        while (current) {
            if (current.value === value) {
                current.value = current.next.value; // Substitui pelo próximo
                current.next = current.next.next;   // Remove o próximo nó
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    // Imprimir lista
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

// Exemplo de uso:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();  // Saída: 10 -> 20 -> 30 -> null

list.removeFirst();  // Remove o primeiro elemento (10)
list.print();  // Saída: 20 -> 30 -> null

list.removeLast();   // Remove o último elemento (30)
list.print();  // Saída: 20 -> null

list.remove(20);     // Remove o elemento 20
list.print();  // Saída: null

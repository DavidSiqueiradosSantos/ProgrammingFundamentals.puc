class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Adiciona no início
    insertAtBeginning(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Adicionar no meio
    insertAt(index, value) {
        if (index < 0 || index > this.size) return; // Verifica índices válidos
        if (index === 0) {
            this.insertAtBeginning(value); // Se for no início, usa o método anterior
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = newNode;
        newNode.next = current;
        this.size++;
    }

    // Adicionar no final
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode; // Se a lista está vazia, o novo nó é o head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Vai até o último nó
            }
            current.next = newNode; // Adiciona o novo nó no final
        }
        this.size++;
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
list.append(10);  // Agora o método append está definido
list.append(30);
list.print();  // Saída: 10 -> 30 -> null

list.insertAtBeginning(5);  // Insere 5 no início
list.print();  // Saída: 5 -> 10 -> 30 -> null

list.insertAt(1, 15);  // Insere 15 na posição 1 (entre 10 e 30)
list.print();  // Saída: 5 -> 10 -> 15 -> 30 -> null

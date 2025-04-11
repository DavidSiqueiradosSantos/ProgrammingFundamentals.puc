// Queue ou Fila (FIFO - First In, First Out)
class Queue {
    constructor() {
        // Inicializa a fila como um array vazio
        this.data = [];
    }
    
    // Adiciona um item no final da fila
    enqueue(record) {
        this.data.push(record);
    }
    
    // Remove o primeiro item da fila (o mais antigo) e o retorna
    dequeue() {
        return this.data.shift();
    }
    
    // Imprime o conteúdo atual da fila no console
    print() {
        console.log(this.data);
    }
}

// Exibe no console para marcar o início do teste da fila
console.log('[02] - Queue');

// Cria uma nova instância da fila
const requestsDeUmaPagina = new Queue();

// Adiciona uma URL na fila (entra por último)
requestsDeUmaPagina.enqueue('https://google.com');

// Adiciona outra URL na fila (entra por último)
requestsDeUmaPagina.enqueue('https://twitter.com');

// Remove a primeira URL da fila (sai por primeiro, que é o 'https://google.com')
// O parâmetro 'https://twitter.com/omariosouto' é ignorado, pois o método dequeue() não usa parâmetros
requestsDeUmaPagina.dequeue('https://twitter.com/omariosouto');

// Imprime o estado atual da fila (deve conter apenas 'https://twitter.com')
requestsDeUmaPagina.print();

// Marca o fim do teste da fila no console
console.log('[02] ==================');

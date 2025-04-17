function doSomething(values) {
    if (values === 0) {
        return 0;
    } else {
        return values + doSomething(values - 1);
    }
}

console.log(doSomething(3)); // Saída: 6

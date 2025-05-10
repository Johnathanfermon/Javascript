function fibonacci(n) {
    let a = 0, b = 1;
    const sequence = [a, b];
    for (let i = 2; i < n; i++) {
        const next = a + b;
        sequence.push(next);
        a = b;
        b = next;
    }
    return sequence;
}
console.log("First 10 Fibonacci numbers:", fibonacci(10));
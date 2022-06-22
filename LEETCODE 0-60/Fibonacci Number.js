function fib(n) {
    let phi1 = (1 + Math.sqrt(5)) / 2;
    let phi2 = (1 - Math.sqrt(5)) / 2;

    fibonacci = Math.round((Math.pow(phi1, n) - Math.pow(phi2, n)) / Math.sqrt(5));

    return fibonacci;
}

const fib = (n, memo = {}) => {
        if(n in memo) return memo[n];
        if(n <= 2) return 1;
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
        return memo[n];
}
console.log(fib(8)) 

const fibBest = (n, a = 0, b = 1) => {
    if(n == 1) return b;
    if(n == 0) return a;
    return fibBest(n - 1, b, a + b)
}
console.log(fibBest(7)); 

const fib = (n, memo = {}) => {
        if(n in memo) return memo[n];
        if(n <= 2) return 1;
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
        return memo[n];
}
console.log(fib(8)) 

//first two numbers start at a:0,b:1
//theseare added together over N iterations
//
//0112358 13 21
const fibBest = (n, a = 0, b = 1) => {
    console.log(`n:${n},a:${a},b:${b}`)
    if(n == 1) return b; //running total of adding a + b 
    if(n == 0) return a;
    // n iterations are decremented - b is passed as a, -b is the sum of a + b
    //b is the current fib number on N iterations - a is the previous fib
    return fibBest(n - 1, b, a + b)
}
console.log(fibBest(8)); 
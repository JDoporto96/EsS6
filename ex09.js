// Implement a recursive function to calculate a specified member of the Fibonacci series.(1 hour).
// Optimize the implementation through the use of a cache (memoization)


function fibo(n, cache){
    var cache = cache || [];
    if (cache[n]){
        return cache[n]
    }
    else{
        if(n<2){
            return n;
        }
        else{
            cache[n] = fibo(n-1, cache) + fibo(n-2,cache);
        }
    }
    return cache[n];
}

console.log(fibo(50));

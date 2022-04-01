// level {1/2/3}
//2
let n = 6
function fib(n){
    let f = []
    if(n <=0){
        return  0
    }
    
        f[0] = 0
        f[1] =1;
        let sum = f[0]+f[1]
        for(var i=2; i<=n; i++){
            f[i] = f[i-1]+f[i-2]
            sum += f[i]
        }
    
    return sum
}

console.log(fib(n))

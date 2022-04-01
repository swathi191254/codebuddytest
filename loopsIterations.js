// level {1/2/3}
//2
let n = 6
function fib(n){
    if(n <=0){
        return  [0,1]
    }
    else{
     var out = fib(n-1);
     out.push(out[out.length-1]+out[out.length-2])
    }
   
    return out;
}
var arr = fib(n)
var sum = 0
for(var i=0; i<arr.length; i++){
    sum += arr[i]
   
}
console.log(sum)

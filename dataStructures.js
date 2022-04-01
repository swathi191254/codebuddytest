// level {1/2/3}
//level 2
// 1
var arr = [1,3,4,6,7,8]
function  removeEven(arr){
    var out = []
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            out.push(arr[i])
        }
    }
    return  out
}
console.log(removeEven(arr))

//2.
var str = 'Elie'
function  upperCase(str){
    let out = ''
    for(var i=0; i<str.length; i++){
        if(str[i] === 'a' ||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
            out += str[i].toUpperCase()
        }
        else{
            out += str[i]
        }
    }
    return  out;
}
console.log(upperCase(str))

//3.
function  findMax(arr){
    var max =0;
    for(var i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr))
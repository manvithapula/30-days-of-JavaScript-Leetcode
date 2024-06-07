var map = function(arr, fn) {
let array= []
for(let i=0; i<arr.length; i++){
var newElement = fn(arr[i],i);
array.push(newElement)
}
    return array;
};

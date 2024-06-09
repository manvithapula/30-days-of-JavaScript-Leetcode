var reduce = function(nums, fn, init) {
    let n=init;
    if(nums===[]){
    return init; 
    }
    else{
    for(let i=0; i<nums.length; i++){
    n = fn(n, nums[i]);
    }
    }
    return n;
};

var createCounter = function(init) {
    let n=init;
    return {
    increment:()=> 
        ++n,
    reset:() => 
        n=init,
    decrement:() => 
        --n,
    }    
};       

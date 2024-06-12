var once = function(functions) {
    let fn=false;
    return function(...args){
        if(!fn){
            fn = true;
            return functions(...args)
        }
        else{
            return undefined;
        }
    }
};

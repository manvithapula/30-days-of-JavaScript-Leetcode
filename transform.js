function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let _array = []
    arr.forEach((item,i) => {
        _array.push(fn(item, i));
    });
    return _array;
};

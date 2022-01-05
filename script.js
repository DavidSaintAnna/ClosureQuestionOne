function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}
const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(4));
console.log(multiplyBy3(10));
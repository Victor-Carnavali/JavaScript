let getModule = function (x) {
  return (x%2 == 0) ? `0`: `1`;
};

console.log(getModule(3));

// ----------- Factorial Number ------------- //
function factorial (n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(5));
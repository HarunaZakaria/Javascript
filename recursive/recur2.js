// write factorial functtion that multiply  the first nth numbers

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1)
    };
}

//console.log(factorial(5)) //will out put 120, which means it multipied 5*4*3*2*1

// write factorial functtion that adds  the first xth numbers

function factor(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x + factor(x - 1)
    };
}
console.log(factor(5)); // this will output 15 because it add 5+4+3+2+1
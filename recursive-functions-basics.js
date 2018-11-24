var factorial = function fac(num) {
    if (num === 1) {
        return 1;
    }

    return num * fac(num - 1)
}
factorial(5); //120
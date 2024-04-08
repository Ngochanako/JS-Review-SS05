function sum(a1, b1) {
    var numA1 = typeof (a1) === 'string' ? parseFloat(a1) : a1;
    var numB1 = typeof (b1) === 'string' ? parseFloat(b1) : b1;
    if (isNaN(numA1) || isNaN(numB1)) {
        console.log("error");
    }
    else {
        return numA1 + numB1;
    }
}

var str1 = "banana";
var uniquineChar = new Set();
for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
    var c = str1_1[_i];
    uniquineChar.add(c);
}
console.log(Array.from(uniquineChar).join(''));

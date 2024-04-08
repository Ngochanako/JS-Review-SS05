let str1:string="banana";
let uniquineChar: Set<string>=new Set();
for(let c of str1){
    uniquineChar.add(c);
}
console.log(uniquineChar);
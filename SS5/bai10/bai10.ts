function sum(a1:number|string,b1:number|string){
    const numA1: number= typeof(a1)=== 'string' ? parseFloat(a1) : a1;
    const numB1: number= typeof(b1)==='string' ? parseFloat(b1) : b1;
    if(isNaN(numA1)||isNaN(numB1)){
        console.log("error");
    } else{
    return numA1+numB1;
    }
}
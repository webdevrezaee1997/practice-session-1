function Calc(num){
    let factorial = 1;
    while(num > 0){
        factorial *= num;
        num--;
    }
    return factorial;
}

console.log(Calc(6));
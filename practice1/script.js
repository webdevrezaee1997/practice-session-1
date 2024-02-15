function fibonacciLength(num) {
    let fibArray = [0, 1];
    for (let i = 2; i < num; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  
      
      if (fibArray[i] > num) {
        break;
      }
      if(num<=1){
        fibArray[num]
      }
    }
  
    return fibArray
  }
//   console.log(fibonacciLength(8))
//   console.log(fibonacciLength(2))
//   console.log(fibonacciLength(0))
  console.log(fibonacciLength(1))
  console.log(fibonacciLength(3))
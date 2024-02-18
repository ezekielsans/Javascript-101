/*
creating a fibbonacci seqeuence via for loop 



*/

function fibonacciGenerator(n) {
  let storage = [];
  if (n === 1) {
    storage = [0];
  
  } else if (n === 2) {
    storage = [0, 1];
   
  } else {
      storage =[0,1];
    for (let i = 2; i < n; i++) {
        storage.push(storage[storage.length - 2] + storage[storage.length - 1]);
    }
  }
  return storage
}

storage = fibonacciGenerator(26);
console.log(storage)

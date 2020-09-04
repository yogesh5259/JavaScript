var array = ["one", "Two", "Three", "Four", "Five", "Six", "abc", "pqr", "asd", "abgt"];

for(let i = array.length - 1; i >= 0; i--) {
   console.log(array[i]);
}

//Another way using function 
array.reverse();
console.log(array);
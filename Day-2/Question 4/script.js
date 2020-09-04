var array = ["one", "Two", "Three", "Four", "Five", "Six", "abc", "pqr", "asd", "abgt"];

for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++){
        if(array[i].charAt(j) === 'a'){
            console.log(array[i]);
        }
    }
}
var array = ["one", "Two", "Three", "Four", "Five", "Six"];
let searchingElement = "Five";

for(let i = 0; i < array.length; i++) {
    if(array[i] === searchingElement){
        console.log("String found");
    }
}
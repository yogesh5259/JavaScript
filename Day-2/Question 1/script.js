var string = prompt("Enter your Stirng");
var character = prompt("Enter character which you want to find");

for (let index = 0; index < string.length; index++) {
    if(string[index] == character){
        alert(character + " found in given string at position " + (index + 1));
    }
}
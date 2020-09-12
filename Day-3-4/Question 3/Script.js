objone = {
    name : "123",
    age : 21,
    country : "India",
    hobbies : ["sports", "reading", "ridding"]
}

objtwo = {
    name : "234",
    age : 22,
    country : "India",
    hobbies : ["sports", "ridding"]
}

objthree = {
    name : "879",
    age : 34,
    country : "India",
    hobbies : ["sports"]
}

var objects = [objone,objtwo,objthree]

objects.forEach(element => {
    console.log(element);
});
objone = {
    name : "123",
    age : 21,
    country : "India",
    hobbies : ["sports", "reading", "ridding"]
}

objtwo = {
    name : "234",
    age : 22,
    country : "USA",
    hobbies : ["sports", "ridding"]
}

objthree = {
    name : "879",
    age : 34,
    country : "India",
    hobbies : ["sports"]
}

var objects = [objone,objtwo,objthree]

function agefilter(array){
    array.forEach(element => {
        if(element.age < 30) {
            console.log(element);
        }
    });
}

agefilter(objects);


function countryfilter(array) {
    array.forEach(element => {
        if(element.country == "India") {
            console.log(element);
        }
    });
}

countryfilter(objects);
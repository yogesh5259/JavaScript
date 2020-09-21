let peoples = [
    {
        name : "Abc",
        age: 30,
        city: "Delhi",
        salary: 20000
    } ,
    {
        name : "Bcd",
        age: 25,
        city: "Mumbai",
        salary: 2000
    },
    {
        name : "cde",
        age: 70,
        city: "Ahmedabad",
        salary: 30000
    },{
        name : "Def",
        age: 100,
        city: "Vadodara",
        salary: 40000
    },
    {
        name : "Efg",
        age: 36,
        city: "Surat",
        salary: 50000
    }
]


function display(d){
    var tdata = "";
    d.forEach(function(element,index){
        var data = `<tr><th>${index + 1}</th>
        <th>${element.name}</th>
        <th>${element.age}</th>
        <th>${element.city}</th>
        <th>${element.salary}</th>
        <th><button onclick="deleteElement(${index})">Delete</button></th>
        <tr>`
        tdata += data;
    })
    var tbody = document.getElementById(`tbody`).innerHTML = tdata;
}

display(peoples);


function searchByName() {
    let searchValue = document.getElementById("searchname").value;
  
    let newdata = peoples.filter(function (people) {
      return (
        people.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ||  people.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }


function deleteElement(index){
    peoples.splice(index, 1);
    display(peoples);
}

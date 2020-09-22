window.onload = function () {
    let initialbuses = [
      {
        name: "Earth",
        source: "Abc",
        destination: "Asgard",
        number: 1020,
        capacity:50,
      },
      {
        name: "Moon",
        source: "xyz",
        destination: "SUn",
        number: 2020,
        capacity:50,
      },
      {
        name: "Pluto",
        source: "GHJ",
        destination: "abd",
        number: 9090,
        capacity:56,
      },
    ];
  
    if (localStorage.getItem("buses") == null) {
      localStorage.setItem("buses", JSON.stringify(initialbuses));
    }
  };


function display(superarray = undefined) {
    let tabledata = "";
    let buses;
    if (superarray == undefined) {
      buses = JSON.parse(localStorage.getItem("buses"));
    } else {
      buses = superarray;
    }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <th>${index + 1}</th>
        <th>${bus.name}</th>
        <th>${bus.source}</th>
        <th>${bus.destination}</th>
        <th>${bus.number}</th>
        <th>${bus.capacity}</th>
        <th>
        <button onclick='deletebuses(${index})'>delete</button>
        </th>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementById("tbody").innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addbuses(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let capacity = document.getElementById("capacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = Number(number);
    bus.capacity = Number(capacity);
  
    //   superheroes.push(superhero);
  
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("capacity").value = "";

  }


  function deletebuses(index) {
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.splice(index, 1);
    localStorage.setItem("buses", JSON.stringify(buses));
    display();
  }



function searchBysource() {
    let searchValue = document.getElementById("searchsource").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ||  bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

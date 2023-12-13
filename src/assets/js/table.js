let my_table = document.getElementById("my_table");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

let row_1 = document.createElement("tr");

let heading_1 = document.createElement("th");
row_1.appendChild(heading_1);
heading_1.innerHTML = "ID";


let heading_2 = document.createElement("th");
row_1.appendChild(heading_2);
heading_2.innerHTML = "NAME";


let heading_3 = document.createElement("th");
row_1.appendChild(heading_3);
heading_3.innerHTML = "STATUS";


let heading_4 = document.createElement("th");
row_1.appendChild(heading_4);
heading_4.innerHTML = "SPECIES";


let heading_5 = document.createElement("th");
row_1.appendChild(heading_5);
heading_5.innerHTML = "TYPE";


let heading_6 = document.createElement("th");
row_1.appendChild(heading_6);
heading_6.innerHTML = "GENDER";


thead.appendChild(row_1);

my_table.appendChild(table);

let theOwlHause = [
  {
    id: 1,
    name: "Luz Noceda",
    status: "Alive",
    species: "Humano",
    type: "Humano-Titán",
    gender: "Femenino",
  },
  {
    id: 2,
    name: "Amity Blight",
    status: "Alive",
    species: "Bruja",
    type: "Ninguna",
    gender: "Femenino",
  },
  {
    id: 3,
    name: "King Clawthorne",
    status: "Alive",
    species: "Titán",
    type: "Ninguna",
    gender: "Masculino",
  },
  {
    id: 4,
    name: "Edalyn Clawthorne",
    status: "Alive",
    species: "Bruja",
    type: "Búho",
    gender: "Femenino",
  },
  {
    id: 5,
    name: "Hooty Clawthorne",
    status: "Alive",
    species: "Demonio",
    type: "Insecto",
    gender: "Masculino",
  },
  {
    id: 6,
    name: "Willow Park",
    status: "Alive",
    species: "Bruja",
    type: "ninguna",
    gender: "Femeino",
  },
  {
    id: 7,
    name: "Hunter",
    status: "Alive",
    species: "Humano",
    type: "Guardia Dorado",
    gender: "Masculino",
  },
  {
    id: 8,
    name: "Flapjack",
    status: "Dead",
    species: "TaliAmigo",
    type: "Arrendajo rojo",
    gender: "Masculino",
  },
  {
    id: 2,
    name: "Waffle",
    status: "Alive",
    species: "TaliAmigo",
    type: "Arrendajo azul",
    gender: "Masculino",
  },
  {
    id: 10,
    name: "Augustus Porter",
    status: "Alive",
    species: "Brujo",
    type: "Ninguno",
    gender: "Masculino",
  },
];

theOwlHause.forEach(function(character){
    let row = document.createElement("tr");
    row.classList = "row";

    let dataID  = document.createElement("td");
    row.appendChild(dataID)
    let dataName  = document.createElement("td");
    row.appendChild(dataName)
    let dataStatus  = document.createElement("td");
    row.appendChild(dataStatus)
    let dataSpecies  = document.createElement("td");
    row.appendChild(dataSpecies)
    let dataType  = document.createElement("td");
    row.appendChild(dataType)
    let dataGender  = document.createElement("td");
    row.appendChild(dataGender)
    

    dataID.innerHTML = character.id;
    dataName.innerHTML = character.name;
    dataStatus.innerHTML = character.status;
    dataSpecies.innerHTML = character.species;
    dataType.innerHTML = character.type;
    dataGender.innerHTML = character.gender;
    
    tbody.appendChild(row);
});


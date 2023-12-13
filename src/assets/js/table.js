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

const attributes = ["id", "name", "status", "species", "type", "gender"];

function createTableHeader() {
  const thead = document.createElement("thead");
  const row = document.createElement("tr");

  attributes.forEach((attribute) => {
    const th = document.createElement("th");
    th.innerHTML = attribute.toUpperCase();
    row.appendChild(th);
  });

  thead.appendChild(row);
  return thead;
}

function createCharacterRow(character) {
  const row = document.createElement("tr");
  row.classList.add("row");

  attributes.forEach((attribute) => {
    const td = document.createElement("td");
    td.innerHTML = character[attribute];
    row.appendChild(td);
  });

  return row;
}

function printTable(array) {
  const myTable = document.getElementById("my_table");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  table.appendChild(createTableHeader());

  array.forEach((character) => {
    const row = createCharacterRow(character);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  myTable.appendChild(table);
}

printTable(theOwlHause);

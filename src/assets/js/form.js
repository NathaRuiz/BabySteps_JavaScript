
const my_form = document.getElementById("my_form")
const form = document.createElement("form");


const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "nombre";


const emailLabel = document.createElement("label");
emailLabel.textContent = "Email: ";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";


const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";


form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br")); 
form.appendChild(document.createElement("br")); 
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br")); 
form.appendChild(submitButton);

my_form.appendChild(form);


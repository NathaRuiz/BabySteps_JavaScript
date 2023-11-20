let num1 = 10;
let num2 = 15;
let person1 = "Nathalia";
let person2 = "David";
let fruits_person1 = true;
let fruits_person2 = false;

function variable_types() {
  const variables_used = document.getElementById("variables_used");
  variables_used.innerHTML = `<h3>Number</h3> 
        <ul>
            <li>num1 = ${num1}</li>
            <li>num2 = ${num2} </li>
        </ul>
        <h3>String</h3>
        <ul>
            <li>person1 = ${person1} </li>
            <li>person2 = ${person2}</li>
        </ul> 
        <h3>Boolean</h3> 
        <ul>
            <li> fruits_person1 = ${fruits_person1}</li>
            <li> fruits_person2 = ${fruits_person2}</li>
        </ul>
        `;
  console.log(`Variables used: ${num1}, ${num2}, ${person1}, ${person2}, ${fruits_person1}, ${fruits_person2}`);
}

function operations(){
    let sum = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1*num2;
    let division = num1/num2 ;
    const math_operations = document.getElementById("math_operations");
    math_operations.innerHTML = `<h3>Addition</h3> 
        num1 + num2 = ${sum}
        <h3>Subtraction</h3>
        num1 - num2 = ${subtraction}
        <h3>Multiplication</h3> 
        num1 * num2 = ${multiplication}
        <h3>Division</h3> 
        num1 / num2 = ${division}
        `;
        console.log(`Sum: ${sum} , Subtraction: ${subtraction} , Multiplication: ${multiplication} , Division: ${division} `)
}

function concatenate_string(){
    let concatenate_type1 = `${person1} tiene ${num1} manzana/s`;
    let concatenate_type2 = person2 + " tiene " + num2 + " manzana/s";
    const strings = document.getElementById("strings");
    strings.innerHTML = ` <h3>Form 1: </h3> 
    Using using backticks and $ 
    <ul>
        <li>${concatenate_type1}</li>
    </ul>
    <h3>Form 2: </h3> 
    Using double quotes and +
    <ul>
    <li>${concatenate_type2}</li>
    </ul>
    `;
    console.log(`Concatenate form 1: ${concatenate_type1}, form 2: ${concatenate_type2}`);
}


variable_types();
operations();
concatenate_string();

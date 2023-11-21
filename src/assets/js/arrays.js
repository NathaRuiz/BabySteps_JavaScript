let numbers = [10,72,43,94,54,62,37,88,19,20];
let text = "Hi, This Is A Text To Proof The Changes";
let names = ["nathalia","yolanda","lina","manuel","david"]

const my_array = document.getElementById("my_array");
my_array.innerHTML = `numbers = [${numbers}]`;

function read_array_console(){
    for(let number in numbers){
        console.log(numbers[number]);
    }
}

function add_number_array(num){
    const add_num = document.getElementById("add_num");
    numbers.push(num);
    console.log(`Updated Array: numbers = [${numbers}]`);
    add_num.innerHTML = `Add (${num}): numbers = [${numbers}]`;

}

function delete_even_numbers(){
    const delete_even = document.getElementById("delete_even");
    for(let number = numbers.length; number>=0; number--){ 
        if(numbers[number]%2===0){
        numbers.splice(number,1);
        }
    }
    delete_even.innerHTML = `numbers = [${numbers}]`
    console.log(`numbers = [${numbers}]`);
}

function bigger_minor_number(){
   const big_num = document.getElementById("big_num");
   big_num.innerHTML = `Bigger number =  ${Math.max(...numbers)}`;
   console.log( `Bigger number =  ${Math.max(...numbers)}`);

   const min_num = document.getElementById("min_num");
   min_num.innerHTML = `Minor number = ${Math.min(...numbers)} `;
   console.log(`Minor number = ${Math.min(...numbers)} `);
}

function lowercase_uppercase(){
    const origin_text = document.getElementById("origin_text");
    origin_text.innerHTML = `<h3>Text</h3>
    ${text}`;
    console.log(`Text: ${text}`);

    const lowercase = document.getElementById("lowercase");
    lowercase.innerHTML = `<h3>Text in lowercase</h3> 
    ${text.toLowerCase()}`;
    console.log(`Text in lowercase: ${text.toLowerCase()}`);
 
    const uppercase = document.getElementById("uppercase");
    uppercase.innerHTML = `<h3>Text in uppercase</h3> 
    ${text.toUpperCase()}`;
    console.log(`Text in uppercase: ${text.toUpperCase()}`);
}

function first_letter_uppercase (){
    const origin_array = document.getElementById("origin_array");
    origin_array.innerHTML = `Array of names: names = [${names}]`;
    console.log(`Array of names: names = [${names}]`);

    const names_array = document.getElementById("names_array");
    for(let name in names){
        names[name] = names[name][0].toUpperCase() + names[name].slice(1);
    }
    names_array.innerHTML = `Updated Array: names = [${names}]`;
    console.log(`Updated Array: names = [${names}]`);
 }


read_array_console();
add_number_array(6);
bigger_minor_number();
delete_even_numbers();
lowercase_uppercase();
first_letter_uppercase();

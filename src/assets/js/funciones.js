
function say_hi(person1, person2){
    let hello1 = `Hello ${person1}`;
    let hello2 =  `Hello ${person2}`;
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = ` <h3>Gretting 1: </h3>  
    <ul>
        <li>${hello1}</li>
    </ul>
    <h3>Gretting 2: </h3> 
    <ul>
    <li>${hello2}</li>
    </ul>
    `;
    return(`Greetings: ${hello1}, ${hello2}`);
}

function add_numbers(num1 , num2){
    let operation = num1 + num2;
    const sum = document.getElementById("sum");
    sum.innerHTML = `${num1} + ${num2} = ${operation}`;
    return(`${num1} + ${num2} = ${operation}`);
}

function odd_even(num){
    const identify = document.getElementById("identify");
    if(num%2==0){
        
        identify.innerHTML = `The number ${num} is even`;
        return(`The number ${num} is even`);
    
    }else{
        
        identify.innerHTML = `The number ${num} is odd`;
        return(`The number ${num} is odd`);
        
    }

}

say_hi("Nathalia","David");
console.log(say_hi("Nathalia","David"));

add_numbers(10,25);
console.log(add_numbers(10,25));

odd_even(10);
console.log(odd_even(13));

let car = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
    num_doors: 5,
    engine: { cylinders: 4, size: 2.2 }
};

 const obj = document.getElementById("object");
    obj.innerHTML = `<h3>Car </h3>
        <ul>
            <li>brand: ${car.brand}</li>
            <li>model: ${car.model}</li>
            <li>year: ${car.year}</li>
            <li>num_doors: ${car.num_doors}</li>
            <li>engine: 
                <ul>
                    <li>cylinders: ${car.engine.cylinders}</li>
                    <li> size:  ${car.engine.size} </li>
                </ul>
            </li>
        </ul>        
    `;

function show_obj_console(param){
    for(let key in param){
        if(typeof param[key] === "object"){
            console.log(key + " = ");
            show_obj_console(param[key]);
        }
        else{
            console.log(`${key} = ${param[key]}`);
        }
    }
}



function show_brand(){
    const car_brand = document.getElementById("car_brand");
    car_brand.innerHTML = `The brand of car is ${car.brand}`;
    return(`The brand of car is ${car.brand}`);
}

function show_num_doors(){
    const num_doors = document.getElementById("num_doors");
    num_doors.innerHTML = `The number of doors on the ${car.brand} car, model ${car.model}, is ${car.num_doors} `;
    return(`The number of doors on the ${car.brand} car, model ${car.model}, is ${car.num_doors}`);
}

function show_key_nested_object(){
    const attribute = document.getElementById("attribute");
    attribute.innerHTML = `Nested object: engine { cylinders: ${car.engine.cylinders}}`;
    return(`Nested object: engine { cylinders: ${car.engine.cylinders}}`);
}

show_obj_console(car);

show_brand();
console.log(show_brand());

show_num_doors();
console.log(show_num_doors());

show_key_nested_object();
console.log(show_key_nested_object());


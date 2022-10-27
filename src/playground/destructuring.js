// const person = {
//     name: "Andrew",
//     age: 28,
//     location: {
//         city: "Philadelphia",
//         temp: 92
//     }
// }

// const {name:firstName =  "ANONYMOUSE", age} = person
// console.log(`${firstName} i am ${age}`);

// const {city, temp:temperature} = person.location

// if(city && temperature){
//     console.log(`it is ${temperature} in ${city}`)
// }

// const book ={
//     title: "ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher:{
//         name: "Penguin"
//     }
// }

// const {name:publisherName = "Self-Published"} = book.publisher;
// console.log(`${publisherName}`)

// const addres = ["1299 S Juniper Street", "Philadelphia", "Pennysylvenia", "19147"];
// const [street, city, state, zip] =  addres;
// console.log(`you are in ${city} ${state}`)

const item = ["COffe (hot)", " $2.00", "$2.50", "$2.75"];
const [coffe , , price] = item;
console.log(`A medium ${coffe} costs ${price}`)



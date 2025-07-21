/* dffrnt ways to write variables in js */
let name="slomo"
console.log(name)
const age= 25
console.log(age)
let isStudent=true
console.log(isStudent)
let city
console.log(city)

/* data types in js */
/* arrilay */
const fruits=["apple","banana","orange",3, false]
console.log(fruits)
/* how can we access in array (methods) */
let schools=["greenwood", "bluefield", "redwood", "yellowstone", "westwood", "northwood"]
console.log(schools[0])
console.log(schools[2])
schools.push("southwood") // adds an element to the end of the array 
console.log(schools)
schools.pop() // removes the last element from the array
console.log(schools)
schools.shift() // removes the first element from the array
console.log(schools)
schools.unshift("eastwood") // adds an element to the beginning of the array
console.log(schools)
schools.length // returns the number of elements in the array
console.log(schools.length)
schools.forEach((b)=>{
 console.log(b)
})
schools.map((b)=>{
console.log(b)
})


/* object */
const person={name:"slomo",
    surname:"mutlu",
    age:25,
    location:"mbarek",
    sex: "male",
    hobbies:["reading", "gaming", "coding"]
}
console.log(person)

const student ={
    name: "peter",
    surname: "parker",
    age: 25,
    location: "new york",
    sex: "male",
}
// accessing object properties . notation
console.log(student.name)
console.log(student.surname)
console.log(student.age)
console.log(student.location)
console.log(student.sex) 

// accessing object properties [] notation
console.log(student["name"])
console.log(student["surname"])
console.log(student["age"])
console.log(student["location"])
console.log(student["sex"])

// modefiying object properties
student.age = 26
console.log(student)

student["age"] = 26
console.log(student)

student.location = "los angeles"
console.log(student)

// string concatenation
let firstName = "john";
let greeting = "Hello, my name is" + firstName + "!";
console.log(greeting)

// Increment operators
// Post-increment
let x = 5;
x++;
console.log(x); // Output: 6

// Pre-increment
let y = 10;
console.log(y++);
console.log(y); // Output: 11
console.log(++y); // Output: 12
console.log(y); // Output: 12 

// operators and expresions
let a = 10;
let b = 5;
console.log(a+b);
let x = 50;
let y = 40;
console.log(x-y)

let c =100;
let d =50;
console.log(c/d)

let t=6;
let u=4;
console.log(t*u)

// comperison operators
let w = 8;
console.log(w==10)
console.log(w=="8")
console.log(w==="8")

let q = 30;
let p = 25;
console.log(q>p)
console.log(q<p)

// logical operators
console.log(q>p && p>q)
console.log(q>p && q<p)

const r =8;
const z = 7
console.log(r>z || z>r)

const a = 20;
console.log(a !== 50);
const b = 50;
console.log(b !== 50); 



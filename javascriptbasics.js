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

let firstName = "john";
let greeting = "Hello, my name is" + firstName + "!";
console.log(greeting)




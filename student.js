let Student = 
{
    name: "Ugo",
    favoriteFood: "Steack",
    city: "Paris",
}

let values = Object.values(Student)
let number = 0

values.forEach((value)=>{
    number += value.length
})
console.log(number)
if(number % 2 == 0)
{
    console.log("Paire")
}
else
{
    console.log("Impaire")
}
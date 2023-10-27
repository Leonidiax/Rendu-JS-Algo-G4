let a  = "Jean"
let b = "Paul"
let result = checkName(a,b)

function checkName(name1,name2)
{
    if(name1 == name2)
    {
        return "identique"
    }
    else
    {
        return "different"
    }
}
console.log(result)
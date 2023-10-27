for(var i = 0; i <= 100; i++)
{
    if(i % 15 == 0)
    {
        console.log("Fizzbuzz")
    }
    else if ( i % 3 == 0)
    {
        console.log("Fizz")
    }
    else if ( i % 5 == 0)
    {
        console.log("Buzz")
    }
}

var i = 0
while(i <= 33)
{

    console.log(i)
    if(i == 17)
    {
        i += 10
    }
    if(i == 28)
    {
        i++
        continue
    }
    if(i == 33)
    {
        console.log("reussi")
        break
    }
    i++;
}
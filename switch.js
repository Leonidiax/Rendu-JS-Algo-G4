var a = 4
var b = 4
var c = 3

if(a == b){
    console.log("c'est egal")
}

if(c < b && a+b != 3){
    console.log("ok")
}
else{
    console.log("rate")
}

switch(a){
    case b:
        console.log("a = b")
        break
    case c:
        console.log("a = c")
        break
    default:
        console.log("a = default")
}
let liste = ["Anissa - Wejdene","Sunny - Boney M.","The final countdown - Europe","Gimme Gimme Gimme - ABBA","We don't need another hero - Tina Turner"]

class Perso {
    constructor(name,health)
    {
        this.name = name
        this.health = health
    }
    
}
class Trajet {
    constructor(number){
        this.number = number
    }
    changement(){
        let aleatoire = Math.floor(Math.random() * liste.length)
        return liste[aleatoire]
    }
}

let perso = new Perso("John", 10)
const nombre = perso.health
let trajet = new Trajet(30)

for(let i = trajet.number; i >=0; i--)
{
    let music = trajet.changement()
    console.log("La musique " + music + " est diffusee et il reste " + i + " feux")
    if(music == liste[0])
    {
        perso.health -= 1
        console.log(perso.health)
        if(perso.health == 0)
        {
            console.log("Explosion")
            break
        }
    }
    if(i == 0)
    {
        console.log(perso.name + " est arrive destination apres " + (nombre - perso.health) + " changements de taxi")
    }
}
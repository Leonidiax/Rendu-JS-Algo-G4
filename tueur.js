let noms = ["Pierre", "Paul","Marie","Jacques","Jean"]
let caracteristics = ["Nerd","Sportif","Blond","Intello","Artiste"]

class Survivant {
    constructor(name, competence, luck1, luck2, luck3)
    {
        this.name = name
        this.competence = competence
        this.luck1 = luck1
        this.luck2 = luck2
        this.luck3 = luck3
        this.isLife = true
    }
}

let Tueur = {
    name : "Jason",
    pv : 100,
}

function Attack(survivant)
    {
        let aleatoire = (Math.random())

        if(aleatoire < survivant1.luck1)
        {
            survivant.isLife = false
        }
        else if(aleatoire > survivant1.luck1 && aleatoire < survivant1.luck2)
        {
            let damage = 10
            Tueur.pv -= damage
            console.log(survivant.name + " a esquive et a inflige " + damage)

        }
        else if(aleatoire > survivant1.luck2)
        {
            let damage = 15
            Tueur.pv -= damage
            survivant.isLife = false
            console.log(survivant.name +" est mort mais a inflige " + damage)
        }
    }  
    

function nomListe()
{
    let aleatoire = Math.floor(Math.random() * noms.length)
    var name = noms[aleatoire]
    noms.splice(aleatoire, 1)
    return name
}

function competenceListe()
{
    let aleatoire2 = Math.floor(Math.random() * caracteristics.length)
    var carac = caracteristics[aleatoire2]
    caracteristics.splice(aleatoire2, 1)
    return carac
}
let palier1 = 0.2
let palier2 = 0.8
let palier3 = 1
let survivant1 = new Survivant(nomListe(), competenceListe(),palier1, palier2,palier3)
let survivant2 = new Survivant(nomListe(), competenceListe(),palier1, palier2,palier3)
let survivant3 = new Survivant(nomListe(), competenceListe(),palier1, palier2,palier3)
let survivant4 = new Survivant(nomListe(), competenceListe(),palier1, palier2,palier3)
let survivant5 = new Survivant(nomListe(), competenceListe(),palier1, palier2,palier3)

console.log(survivant1.name + " est un " + survivant1.competence)
console.log(survivant2.name + " est un " + survivant2.competence)
console.log(survivant3.name + " est un " + survivant3.competence)
console.log(survivant4.name + " est un " + survivant4.competence)
console.log(survivant5.name + " est un " + survivant5.competence)

let perso = []
let morts = []
perso.push(survivant1, survivant2, survivant3, survivant4, survivant5)

while(Tueur.pv > 0 && perso.length > 0)
{
    if(perso.length == 0)
    {
        console.log("Les survivants sont morts")
        break
    }
    let aleatoire3 = Math.floor(Math.random() * perso.length)
    let surv = survivant1

    surv = perso[aleatoire3]
    Attack(surv)

    if(!surv.isLife) 
    {
        morts.push(perso[aleatoire3])
        perso.splice(aleatoire3, 1)
    }
    if(Tueur.pv <= 0)
    {
        console.log(Tueur.name + " est mort ! Bravo aux survivants !")
        break
    }
}

perso.forEach((per)=>{
    console.log(per.name + " est vivant")
})
if(Tueur.pv > 0)
{
    console.log(Tueur.name + " a gagne")
    console.log("RIP aux survivants")
}
else
{
    morts.forEach(mort =>{
        console.log(mort.name + " est mort")
    })
}
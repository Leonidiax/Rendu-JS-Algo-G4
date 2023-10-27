class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isLucky(){
        let aleatoire = Math.random()
        return aleatoire > this.luck
    }
    attackPokemon(pokemon){
        if(this.isLucky())
        {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(pokemon.name + " se prend " + damage + " et est maintenant a "+ pokemon.hp +" points de vie")
            console.log(pokemon.hp)
        }
        else console.log("Le pokemon " + pokemon.name + " a esquive !")
    }
}

let pokemon1 = new Pokemon("Dorian",30,15,100,0.6)
let pokemon2 = new Pokemon("Alexandre",20,20,130,0.5)

while(pokemon1.hp > 0 && pokemon2.hp > 0){
    pokemon1.attackPokemon(pokemon2)
    if(pokemon2.hp <= 0){
        console.log("C'est Alexandre qui gagne")
        break
    }
    pokemon2.attackPokemon(pokemon1)
    if(pokemon1.hp <= 0){
        console.log("C'est Dorian qui gagne")
        break
    }
}
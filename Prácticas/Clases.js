class Pokemon {
    constructor(nombre, tipo, vidas, ataque){
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.ataque = ataque
        this.nivel = 1
    }

    saludar(){
        console.log(`Hola, sor el pokemon ${this.nombre}` y te estoy saludando)
    }
}

// segunda forma 
export class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, ataque, dañoImpactrueno){
        super(nombre, tipo, vidas, ataque) // llam del padre
        this.dañoImpactrueno = dañoImpactrueno

    }
    dañoImpactrueno(){
        console.log(`${this.nombre} lanzo impactrueno con daño de ${this.dañoImpactrueno}` )
    }
}

// Primera forma
//export default Pikachu // exporta un sólo elemento, una clase
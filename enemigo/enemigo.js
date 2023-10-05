class Enemigo extends Personaje {
    constructor(name, health, damage, tipo) {
    super(name, health, damage);
    this.tipo = tipo;
    }

    mostrarTipo() {
    console.log(`${this.name} es un enemigo de tipo ${this.tipo}.`);
    }
}
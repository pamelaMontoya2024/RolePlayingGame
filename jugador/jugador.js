class jugador extends personaje {
    constructor(name, health, damage, level) {
    super(name, health, damage);
    this.level = level;
    }

    subirNivel() {
    this.level++;
    console.log(`${this.name} ha subido de nivel a ${this.level}.`);
    }
}
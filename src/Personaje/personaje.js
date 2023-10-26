class Personaje {
        constructor(nombre, salud, ataque, defensa) {
        this.nombre = nombre;
        this.salud = salud;
        this.ataque = ataque;
        this.defensa = defensa;
        }
    
        atacar(objetivo) {
        const daño = Math.max(0, this.ataque - objetivo.defensa);
        objetivo.salud -= daño;
        console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${daño} de daño.`);
        }
    }
    
    
    
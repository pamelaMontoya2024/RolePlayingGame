

function main() {
    const jugador = new Jugador("Héroe", 100, 20, 10);
    const enemigo = new Enemigo("Monstruo", 80, 15, 5);

    console.log(`${jugador.nombre} vs ${enemigo.nombre}`);

    while (jugador.salud > 0 && enemigo.salud > 0) {
        console.log("Presiona Enter para atacar...");
        
        prompt("Presiona Enter para atacar...");
        jugador.atacar(enemigo);
        console.log(`Salud de ${jugador.nombre}: ${jugador.salud}, Salud de ${enemigo.nombre}: ${enemigo.salud}`);

        if (enemigo.salud <= 0) {
        console.log(`${jugador.nombre} ha derrotado a ${enemigo.nombre}.`);
        break;
        }

        console.log(`Turno de ${enemigo.nombre}...`);
        enemigo.atacar(jugador);
        console.log(`Salud de ${jugador.nombre}: ${jugador.salud}, Salud de ${enemigo.nombre}: ${enemigo.salud}`);

        if (jugador.salud <= 0) {
        console.log(`${enemigo.nombre} ha derrotado a ${jugador.nombre}.`);
        break;
        }
    }
    }

main();

const jugador1 = new Jugador("Jugador 1", 100, 20, 1);
    const enemigo1 = new Enemigo("Enemigo 1", 80, 15);
    
    
    jugador1.atacar(enemigo1);
    enemigo1.atacar(jugador1);
    
    
    jugador1.subirNivel();
    
    
    enemigo1.mostrarTipo();
    
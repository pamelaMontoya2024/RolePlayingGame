const jugador1 = new jugador("Jugador 1", 100, 20, 1);
    const enemigo1 = new enemigo("Enemigo 1", 80, 15);
    
    
    jugador1.atacar(enemigo1);
    enemigo1.atacar(jugador1);
    
    
    jugador1.subirNivel();
    
    
    enemigo1.mostrarTipo();
    
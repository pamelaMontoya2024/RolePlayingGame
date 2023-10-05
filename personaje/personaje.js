class personaje {
    constructor(name, health, damage
        ){
            this.name= name;
            this.health= health;
            this.damage= damage;
        }
        atacar (enemy){
            console.log (`${this.name} ataca a ${enemy.name} y causa ${this.damage} de daño `);
            enemy.recibirDaño(this.damage);
        }
        recibirDaño(damage){
            this.health -= damage;
            if (this.health <= 0){
                console.log(`${this.name} ha sido derrotado `);

            }else{
                console.log(`${this.name} tiene ${this.health} de salud restante.`);
            }
        }
}
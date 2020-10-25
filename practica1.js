"use strict";

// javaScript practica tema 1 ejercicio 1

class Jugador {
    constructor(nombre, ocupacion, faccion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.faccion = faccion;
        this.puntosVida = 100;
    }

    mostrarDatos() {
        console.log('Nombre:', this.nombre);
        console.log('Ocupacion:', this.ocupacion);
        console.log('Faccion:', this.faccion);
        console.log('Puntos de vida:', this.puntosVida);
    }

    toString() {
        return `Nombre: ${this.nombre} - Ocupacion: ${this.ocupacion} - Faccion: ${this.faccion} - Puntos de vida: ${this.puntosVida}`;
    }
}

let jugador1 = new Jugador('Pepito', 'Zoologo', 'Grillo');
let jugador2 = new Jugador('Gato', 'Cazador', 'Botas');
let jugadores = [jugador1, jugador2];

console.log(jugadores);

// javaScript practica tema 1 ejercicio 2

class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
 
    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}


class Abominacion extends Zombi {
    ataqueMultiple(objetivo) {
        this.atacar(objetivo);
        this.atacar(objetivo);
        this.atacar(objetivo);
    }
}

let abominacion1 = new Abominacion("Abominacion1", 100, 100);
abominacion1.ataqueMultiple(jugador1);

// javaScript practica tema 1 ejercicio 3

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {  // jugador es el parametro para referirte a la funcion consumir dentro de la variable ricardo
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
 
let manzana = new Consumible('Manzana');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}

ricardo.consumir(manzana);

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
 
    consumir(jugador) {
        let nuevosPuntos = Math.min(jugador.puntosVida + this.poder, jugador.maxPuntosVida);
        let puntosRecuperados = nuevosPuntos - jugador.puntosVida;
        jugador.puntosVida += puntosRecuperados;
        console.log(`${jugador.nombre} consume ${this.nombre} y le cura ${puntosRecuperados} puntos de vida`);
    }
}

let plantaCurativa = new PlantaCurativa('Planta Curativa', 5);
ricardo.consumir(plantaCurativa);


// javaScript practica tema 1 ejercicio 4

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

function obtenerMayoresPuntuaciones(todasPuntuaciones) {
    let mayoresPuntuaciones = [];
    for(let x = 0; x < todasPuntuaciones.length; x++) {
        let item = todasPuntuaciones[x];
        if (item.puntuacion > 100) {
            mayoresPuntuaciones.push(item); // push añade objeto al array
        }
    }
    mayoresPuntuaciones.sort(function(item1, item2) { // sort ordena el array (no hace copia!)
        return item2.puntuacion - item1.puntuacion;
    });
    return mayoresPuntuaciones;
}

let resultado = obtenerMayoresPuntuaciones(puntuaciones);
console.log(resultado);

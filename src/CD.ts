import { AlmacenamientoFisico } from "./AlmacenamientoFisico.js";

export class CD extends AlmacenamientoFisico{

    girar(): void {
        console.log("CD girando en el lector");
    }

    leerDatos(): void {
        console.log("Leyendo datos del CD");
    }

    escribirDatos(): void {
        console.log("Grabando datos en el CD");
    }

    reportarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nCapacidad: ${this.capacidad} GB.\nContenido: ${this.contenido}\nTipo de almacenamiento: ${this.tipoAlmacenamiento}.`);
    }

}
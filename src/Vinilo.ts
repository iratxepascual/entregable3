import { AlmacenamientoFisico } from "./AlmacenamientoFisico.js";

export class Vinilo extends AlmacenamientoFisico{

    girar(): void {
        console.log("Vinilo girando en el lector");
    }

    leerDatos(): void {
        console.log("Leyendo datos del vinilo");
    }

    escribirDatos(): void {
        console.log("Grabando datos en el vinilo");
    }

    reportarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nCapacidad: ${this.capacidad} GB.\nContenido: ${this.contenido}\nTipo de almacenamiento: ${this.tipoAlmacenamiento}.`);
    }

}
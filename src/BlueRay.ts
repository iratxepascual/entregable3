import { AlmacenamientoFisico } from "./AlmacenamientoFisico.js";

export class BlueRay extends AlmacenamientoFisico{

    girar(): void {
        console.log("BlueRay girando en el lector");
    }

    leerDatos(): void {
        console.log("Leyendo datos del BlueRay");
    }

    escribirDatos(): void {
        console.log("Grabando datos en el BlueRay");
    }

    reportarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nCapacidad: ${this.capacidad} GB.\nContenido: ${this.contenido}\nTipo de almacenamiento: ${this.tipoAlmacenamiento}.`);
    }

}
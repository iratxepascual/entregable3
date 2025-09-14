import { AlmacenamientoFisico } from "./AlmacenamientoFisico.js";

export class DiscoDuro extends AlmacenamientoFisico{

    girar(): void {
        console.log("Disco duro girando");
    }

    leerDatos(): void {
        console.log("Leyendo datos del disco duro");
    }

    escribirDatos(): void {
        console.log("Grabando datos en el disco duro");
    }

    reportarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nCapacidad: ${this.capacidad} GB.\nContenido: ${this.contenido}\nTipo de almacenamiento: ${this.tipoAlmacenamiento}.`);
    }

}
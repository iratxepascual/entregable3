import { IComportamientos } from "./IComportamientos.js";

export class AlmacenamientoFisico implements IComportamientos{
    #nombre: string;
    #capacidad: number;
    #contenido: string;
    #tipoAlmacenamiento: string;

    constructor(nuevoNombre: string, nuevoCapacidad: number, nuevoContenido: string, nuevoTipoAlmacenamiento: string){
        this.#nombre = nuevoNombre;
        this.#capacidad = nuevoCapacidad;
        this.#contenido = nuevoContenido;
        this.#tipoAlmacenamiento = nuevoTipoAlmacenamiento;
    }

    girar(): void{}
    leerDatos(): void {}
    escribirDatos(): void {}
    reportarInformacion(): void {
        console.log(`Nombre: ${this.#nombre}\nCapacidad: ${this.#capacidad}\nContenido: ${this.#contenido}\nTipo de almacenamiento: ${this.#tipoAlmacenamiento}.`);
    }

    get nombre(): string{
        return this.#nombre;
    }

    set nombre(nuevoNombre:string){
        this.#nombre = nuevoNombre;
    }

    get capacidad(): number{
        return this.#capacidad;
    }

    set capacidad(nuevoCapacidad:number){
        this.#capacidad = nuevoCapacidad;
    }

    get contenido(): string{
        return this.#contenido;
    }

    set contenido(nuevoContenido:string){
        this.#contenido = nuevoContenido;
    }

    get tipoAlmacenamiento(): string{
        return this.#tipoAlmacenamiento;
    }

    set tipoAlmacenamiento(nuevoTipoAlmacenamientoo:string){
        this.#tipoAlmacenamiento = nuevoTipoAlmacenamientoo;
    }

}
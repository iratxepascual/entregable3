import { IDiscoGiratorio } from "./IDiscoGiratorio.js";

export class ObjetosGiratorios implements IDiscoGiratorio{

    #tipoObjeto: string;

    constructor(nuevoTipoObjeto: string){
        this.#tipoObjeto = nuevoTipoObjeto;
    }

    girar(): void{}

    get tipoObjeto(): string{
        return this.#tipoObjeto;
    }

    set tipoObjeto(nuevoTipoObjeto:string){
        this.#tipoObjeto = nuevoTipoObjeto;
    }

}
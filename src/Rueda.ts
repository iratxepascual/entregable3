import { ObjetosGiratorios } from "./ObjetosGiratorios.js";

export class Rueda extends ObjetosGiratorios{

    girar(): void {
        console.log(`La ${this.tipoObjeto} está girando`);
    }

}
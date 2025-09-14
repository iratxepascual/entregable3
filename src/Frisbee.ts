import { ObjetosGiratorios } from "./ObjetosGiratorios.js";

export class Frisbee extends ObjetosGiratorios{

    girar(): void {
        console.log(`El ${this.tipoObjeto} está girando en el aire`);
    }

}
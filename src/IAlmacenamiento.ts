export interface IAlmacenamiento{
    setNombre(nuevoNombre: string):void;
    getNombre():string;
    setCapacidad(nuevoCapacidad: number):void;
    getCapacidad():number;
    setContenido(nuevoContenido: string):void;
    getContenido():string;
    setTipoAlmacenamiento(nuevoAlmacenamiento: string):void;
    getTipoAlmacenamiento():string;
}
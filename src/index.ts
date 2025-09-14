import { CD } from "./CD.js";
import { DiscoDuro } from "./DiscoDuro.js";

const discoduro1 = new DiscoDuro("Disco duro de prueba", 10, "Este es el contenido del disco duro de prueba", "Disco duro");
const cd1 = new CD("CD de prueba", 2, "Este es el contenido del CD de prueba", "CD");

discoduro1.girar();
discoduro1.leerDatos();
discoduro1.escribirDatos();
discoduro1.reportarInformacion();

cd1.girar();
cd1.leerDatos();
cd1.escribirDatos();
cd1.reportarInformacion();
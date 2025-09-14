import { CD } from "./CD.js";
import { DiscoDuro } from "./DiscoDuro.js";
import { BlueRay } from "./BlueRay.js";
import { Vinilo } from "./Vinilo.js";
import { Rueda } from "./Rueda.js";
import { Frisbee } from "./Frisbee.js";

const discoduro1 = new DiscoDuro("Disco duro de Iratxe", 10, "Copia de seguridad de fotos de Iratxe", "Disco duro");
const cd1 = new CD("CD de Guns N' Roses", 2, "Álbum Nothing las forever", "CD");
const blueray1 = new BlueRay("Película Superman - Hombre del mañana", 6, "Película en BlueRay de Superman", "BlueRay");
const vinilo1 = new Vinilo("Vinilo de Jethro Tull", 1, "Disco Under Wraps de 1984", "Vinilo");
const rueda1 = new Rueda("rueda de camión");
const frisbee1 = new Frisbee("frisbee rojo");

console.log("Disco duro:\n");
discoduro1.girar();
discoduro1.leerDatos();
discoduro1.escribirDatos();
discoduro1.reportarInformacion();

console.log("\nCD:\n");
cd1.girar();
cd1.leerDatos();
cd1.escribirDatos();
cd1.reportarInformacion();

console.log("\nBlueRay:\n");
blueray1.girar();
blueray1.leerDatos();
blueray1.escribirDatos();
blueray1.reportarInformacion();

console.log("\nVinilo:\n");
vinilo1.girar();
vinilo1.leerDatos();
vinilo1.escribirDatos();
vinilo1.reportarInformacion();

console.log("\nRueda:\n");
rueda1.girar();

console.log("\nFrisbee:\n");
frisbee1.girar();
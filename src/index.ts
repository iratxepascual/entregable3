import { CD } from "./CD.js";
import { DiscoDuro } from "./DiscoDuro.js";
import { BlueRay } from "./BlueRay.js";
import { Vinilo } from "./Vinilo.js";

const discoduro1 = new DiscoDuro("Disco duro de prueba", 10, "Este es el contenido del disco duro de prueba", "Disco duro");
const cd1 = new CD("CD de prueba", 2, "Este es el contenido del CD de prueba", "CD");
const blueray1 = new BlueRay("BlueRay de prueba", 6, "Contenido del BlueRay de prueba", "BlueRay");
const vinilo1 = new Vinilo("Vinilo de prueba", 1, "Contenido del vinilo de prueba", "Vinilo");

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
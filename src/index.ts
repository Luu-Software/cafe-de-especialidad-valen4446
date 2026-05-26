import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');


if(esEstudiante === "si"){

    let valorDescuento: number = (parseInt(totalTexto)) * 0.9;

    let totalPorPersona: number = valorDescuento / parseInt(personasTexto);

    let total: string = totalPorPersona.toString();

    console.log(`Total por persona: $${totalPorPersona}`);

} else {
    let totalPorPersona: number = parseInt(totalTexto) / parseInt(personasTexto);

    let total: string = totalPorPersona.toString();

    console.log(`Total por persona: $${totalPorPersona}`);
}



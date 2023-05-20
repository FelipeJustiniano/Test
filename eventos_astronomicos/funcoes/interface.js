import { inverteMesAno, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

const imprimeLista = (lista) => {
    console.log('\nNOME DA CHUVA               - INTENSIDADE - HEMISFÉRIO - PERÍODO');

    lista.forEach( imprimeChuva );
}

const imprimeChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27,' ');
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);

    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10,' ');

    const dataInicio = inverteMesAno(chuva.inicio);
    const dataFim = inverteMesAno(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim} `);
}

export default imprimeLista;
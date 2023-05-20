import colecaoChuvas from "./dados_chuva/chuvaDeMeteoros.js";
import imprimeLista from "./funcoes/interface.js";
import { verificaChuvaData, verificaChuva2Meses } from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date();

const chuvasVisiveisHoje = colecaoChuvas.filter(
    (chuva) => verificaChuvaData(chuva, dataAtual)
);

const chuvasVisiveis2Meses = colecaoChuvas.filter(
    (chuva) => verificaChuva2Meses(chuva, dataAtual)
);

console.log('Chuva de meteoros');

if (chuvasVisiveisHoje.length > 0) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length == 1
        ? '1 chuva de meteoros que pode ser vista hoje'
        : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

    console.log(msg);

    imprimeLista(chuvasVisiveisHoje);
} else {
    console.log('\nNenhuma chuva de meteoros passando no momento');
}

console.log('\n\nNão perca as próximas chuvas de meteoros:');
imprimeLista(chuvasVisiveis2Meses);
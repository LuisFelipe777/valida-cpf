/*70548445052

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0. 
*/
const input = document.querySelector(".text");
const divResult = document.querySelector(".div-result");
let text;
let decimoDigito = 0;
let decimoPrimeiroDigito = 0;
let cpf = "";

function calcula() {
    text = input.value;
    criaDecimoDigito();
    cpf = "";
}

function calculaDigito(num) {
    const result = 11 - (num % 11);
    if (result > 9) {
        return 0;
    } else {
        return result;
    }
}

function criaDecimoDigito() {
    let novePrimeirosDigitos = "";
    let contador = 10;

    for (let i = 0; i < 9; i++) {
        novePrimeirosDigitos += text[i];
        cpf += text[i];
    };

    const array = novePrimeirosDigitos.split("");
    const result = array.map((v, ind) => parseInt(v) * (contador - parseInt(ind)))
        .reduce((ac, v) => {
            return ac + v;
        }, 0);
    decimoDigito = calculaDigito(result);
    cpf += decimoDigito;
    criaDecimoPrimeiroDigito();
}

function criaDecimoPrimeiroDigito() {
    let dezPrimeirosDigitos = "";
    let contador = 11;

    for (let i = 0; i < 10; i++) {
        dezPrimeirosDigitos += cpf[i];
    };

    const array = dezPrimeirosDigitos.split("");
    const result = array.map((v, ind) => parseInt(v) * (contador - parseInt(ind)))
        .reduce((ac, v) => {
            return ac + v;
        }, 0);
    decimoPrimeiroDigito = calculaDigito(result);
    cpf += decimoPrimeiroDigito;
    verifica();
}

function verifica() {
    if (cpf == text) {
        divResult.textContent = `CPF: ${text} válido`;
        divResult.style.display = "block";
    } else {
        divResult.textContent = `CPF: ${text} inválido`;
        divResult.style.display = "block";
    }
}

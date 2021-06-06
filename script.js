let myCash = prompt("Qual o valor a ser retirado?");
document.querySelector('.valor-retirado').textContent = `R$ ${myCash},00 retirado com sucesso!`;
let n50 = 0;
let n20 = 0;
let n5 = 0;
let n1 = 0;

function caixaEletronico () {
    while(myCash >= 50 || myCash <= -50) {
        myCash = myCash - 50;
        n50++;
    }

    while (myCash >= 20) {
        myCash = myCash - 20;
        n20++;
    }

    while(myCash >= 5) {
        myCash = myCash - 5;
        n5++;
    }

    while(myCash >= 1) {
        myCash = myCash - 1;
        n1++;
    }

    document.querySelector('.nota-50').textContent = `${n50} notas de R$ 50,00`;
    document.querySelector('.nota-20').textContent = `${n20} notas de R$ 20,00`;
    document.querySelector('.nota-5').textContent = `${n5} notas de R$ 5,00`;
    document.querySelector('.nota-1').textContent = `${n1} notas de R$ 1,00`;

};

console.log(caixaEletronico());
const calculaCaixa = function () {

    let n50 = 0;
    let n20 = 0;
    let n5 = 0;
    let n1 = 0;

    let inputValue = Number(document.querySelector('.input--').value);
    let inicalValue = inputValue;

    if(inputValue < 1){
        return document.querySelector('.aviso').textContent = `Impossível retirar um valor nulo ou negativo` ;
    }

    while(inputValue >= 50 || inputValue <= -50) {
        inputValue = inputValue - 50;
        n50++;
    }

    while (inputValue >= 20) {
        inputValue = inputValue - 20;
        n20++;
    }

    while(inputValue >= 5) {
        inputValue = inputValue - 5;
        n5++;
    }

    while(inputValue >= 1) {
        inputValue = inputValue - 1;
        n1++;
    }

    document.querySelector('.nota-50').textContent = `${n50} notas de R$ 50,00`;
    document.querySelector('.nota-20').textContent = `${n20} notas de R$ 20,00`;
    document.querySelector('.nota-5').textContent = `${n5} notas de R$ 5,00`;
    document.querySelector('.nota-1').textContent = `${n1} notas de R$ 1,00`;

    document.querySelector('.valor-retirado').textContent = `R$ ${inicalValue},00 retirad${inicalValue > 1 ? "os" : "o"} com sucesso!`;

    document.querySelector('.input--').value = '';
}

document.querySelector('.btn').addEventListener('click', function(){
    calculaCaixa();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      calculaCaixa();
    }
});

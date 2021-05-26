const nome = prompt('Informe seu nome');
console.log(nome);

const idade = prompt('Informe sua idade');
console.log(parseInt(idade));

function calcularIdade(n1) {
    
    if (n1 >= 65) {
        return console.log("Você já é aposentado!")
    }else {
        const faltam = 65-n1;
        return console.log(`Faltam ${faltam} anos para a sua aposentadoria`)
    }
    
  }

  calcularIdade(idade);


const nome = prompt('Informe seu nome');
console.log(nome);

const peso = prompt('Informe seu peso');
console.log(parseFloat(peso));

const altura = prompt('Informe sua altura');
console.log(parseFloat(altura));

const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
console.log(imc);

if(imc < parseFloat(17)){
    console.log(`${nome}! você está muito abaixo do peso`);
    console.log("Dica: Procure um médico nutricionista!");
}
else if(imc >= parseFloat(17) && imc < parseFloat(18.5)) {
    console.log(`${nome}! você está  abaixo do peso`);
    console.log("Dica: Você precisa se alimentar melhor!");
}
else if(imc >= parseFloat(18.5) && imc < parseFloat(25)){
    console.log(`${nome}! você está com o peso normal`);
    console.log("Dica: Parabéns! seu peso é o ideal");
}
else if(imc >= parseFloat(25) && imc < parseFloat(30)){
    console.log(`${nome}! você está acima do peso`);
    console.log("Dica: Chega de coxinha");
}
else if(imc >= parseFloat(30) && imc < parseFloat(35)){
    console.log(`${nome}! você está com obesidade I`);
    console.log("Dica: Hora de parar de comer e começar a correr");
}
else if(imc >= parseFloat(35) && imc < parseFloat(40)){
    console.log(`${nome}! você está com obesidade II`);
    console.log("Dica: Procurar um médico e começar a praticar exercicios");
}
else if (imc > parseFloat(40)){
    console.log(`${nome}! você está com obesidade III`);
    console.log("Dica: MÉDICO AGORA!!! ");
}
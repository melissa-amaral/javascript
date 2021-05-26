const nome1 = prompt('Informe seu nome');
console.log(nome1);

const peso1 = prompt('Informe seu peso');
console.log(parseFloat(peso1));

const altura1 = prompt('Informe sua altura');
console.log(parseFloat(altura1));

const nome2 = prompt('Informe seu nome');
console.log(nome2);

const peso2 = prompt('Informe seu peso');
console.log(parseFloat(peso2));

const altura2 = prompt('Informe sua altura');
console.log(parseFloat(altura2));

const imc1 = parseFloat(peso1) / (parseFloat(altura1) * parseFloat(altura1));
const imc2 = parseFloat(peso2) / (parseFloat(altura2) * parseFloat(altura2));

if (imc1 > imc2) {
    console.log(`o imc de ${nome1} (${imc1}) é maior que o imc de ${nome2} (${imc2}) `);
    
}else if (imc1 === imc2){
    console.log(`o imc de ${nome1} (${imc1}) é igual ao imc de ${nome2} (${imc2}) `);
}else{
    console.log(`o imc de ${nome2} (${imc2}) é maior que o imc de ${nome1}(${imc1}) `);
}


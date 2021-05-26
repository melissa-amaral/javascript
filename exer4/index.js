const numero = prompt('Digite um numero');

const palavras = [];

for (let i = 0; i < numero; i++) {
    const palavra = prompt(`Digite a ${i+1}° palavra:`);
    palavras.push(palavra);

}
for (let i = palavras.length -1; i >= 0; i--) {
    const final = palavras[i];
    console.log(final);
  }
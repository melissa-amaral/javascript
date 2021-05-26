const restaurantes = [];
const valorCompra = [];
const valorGorjeta = [];

for (let i = 0; i < 3; i++) {
    const restaurante = prompt(`Informe o ${i+1}° restaurante:`);
    restaurantes.push(restaurante);
    console.log(restaurante);

}
for (let i = 0; i < 3; i++) {
    const valor = prompt(`Informe o valor da ${i+1}° compra:`);
    valorCompra.push(parseInt(valor));
    console.log(parseInt(valor));
    const gorja = calcularGorjeta(valor);
    valorGorjeta.push(parseFloat(gorja));
    console.log(parseFloat(gorja));

}

function calcularGorjeta(compra) {
    
    if (compra < 50) {
       const gorjeta = compra*0.2;
       return gorjeta;
    }
    else if (compra >= 50 && compra <=200) {
        const gorjeta = compra*0.15;
        return gorjeta;
    }
    else if (compra > 200) {
        const gorjeta = compra*0.1;
        return gorjeta;
    }
    
}
  
function detalhamento(nomeRestaurante = [], CompraTotal = [], GorjetaFinal = []){

    for (let i = 0; i < 3; i++) {
        console.log(`${nomeRestaurante[i]} - [Valor: R$ ${CompraTotal[i]} | Gorjeta: ${GorjetaFinal[i]} | Total: ${CompraTotal[i] + GorjetaFinal[i]}]`);
    }
}

detalhamento(restaurantes, valorCompra, valorGorjeta);
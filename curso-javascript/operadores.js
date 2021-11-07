
function comparaNumeros(num1, num2) {
    if (!num1 || !num2){
        return 'Informe dois números!';
    }
    return `${primeiraFrase(num1, num2)} ${segundaFrase(num1, num2)}`;
}

function primeiraFrase(num1, num2){
    const compara = num1 === num2 ? '' : 'não';
    return `Os números ${num1} e ${num2} ${compara} são iguais.`
    }

function segundaFrase(num1, num2){
    const resultado = num1 + num2;
    const compara10 = resultado != 10 ? (resultado > 10 ? 'maior que' : 'menor que' ): 'igual a';
    const compara20 = resultado != 20 ? (resultado > 20 ? 'maior que' : 'menor que' ): 'igual a';
    return `Sua soma é ${resultado}, que é ${compara10} 10 e ${compara20} 20.`
}

console.log(comparaNumeros()); // teste vazio
console.log(comparaNumeros(1,2)); // Diferentes, 3, menor que 10 e 20 
console.log(comparaNumeros(5,5)); // Iguais, 10, igual a 10 e menor que 20
console.log(comparaNumeros(12,8)); // Diferente, 20, maior que 10 e igual a 20
console.log(comparaNumeros(12,12)); // Iguais, 24, maior que 10 e maior que 20

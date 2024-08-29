// 6. Filtrado de elementos en un arreglo
function filtrarMayoresQue(arreglo, valor) {
    return arreglo.filter(numero => numero > valor);
}

const numerosParaFiltrar = [1, 2, 5, 8, 0];
const valorFiltro = 7;
console.log(`Números mayores que ${valorFiltro}:`, filtrarMayoresQue(numerosParaFiltrar, valorFiltro));

function aplicarDesconto(valor,desconto)
{
    return valor - desconto
}
function somente_numeros(valor)
{
    return !isNaN(valor)
}
    

console.log('APP funcionando')
console.log('aplicarDescontotest()')

module.exports = {aplicarDesconto}
module.exports = {somente_numeros}


    
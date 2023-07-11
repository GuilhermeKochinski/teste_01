const test = require('tape')
const func = require('./teste')

/*test('aplicar desconto padrão', (t) => {
      t.assert(func.aplicarDesconto(10,5) === 5, "desconto true 01")
      t.end()
 }
)

test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(11,5) === 5, "desconto false 02")
    t.end()
 }
)

test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(20,5) === 15, "desconto true 03")
    t.end()
 }
)

test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(100,50) === 50, "desconto true 04")
    t.end()
 } 
)

test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(1000,500) === 5, "desconto  true 05")
    t.end()
 }
)*/

test('somente_numeros', (t) =>{
     t.assert(func.somente_numeros(1000) == true, "validacao 01")
     t.end()
 }
)
test('somente_numeros', (t) =>{
    t.assert(func.somente_numeros('aa') == false, "validacao 02")
    t.end()
}
)
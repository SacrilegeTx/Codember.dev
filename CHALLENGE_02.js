/*
Rules:
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/

const fs = require('fs')

let currentValue = 0
let printMsg = ''

fs.readFile('files\\message_02.txt', 'utf-8', (err, data) => {
  if (err) throw err

  Array.from(data).forEach(value => {
    switch (value) {
      case '#':
        ++currentValue
        break
      case '@':
        --currentValue
        break
      case '*':
        currentValue *= currentValue
        break
      case '&':
        printMsg += currentValue
        break
    }
  })

  console.log(printMsg)
})

/*
Rules:
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/

import fs from 'node:fs/promises'

let currentValue = 0
let msg = ''

const file = await fs
  .readFile('files\\message_02.txt', 'utf-8')
  .catch(err => console.error('Error leyendo el archivo:', err.message))

  Array.from(file).forEach(value => {
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
      msg += currentValue
      break
  }
})

console.log({msg})

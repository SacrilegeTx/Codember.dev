import fs from 'node:fs/promises'

const count = arr => arr.reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {})

const file = await fs
  .readFile('files\\message_01.txt', 'utf-8')
  .catch(err => console.error('Error leyendo el archivo:', err.message))

let txt = (Object.entries(count(file.split(' '))).join('')).replace(new RegExp(',', 'g'), '')

console.log({ txt })

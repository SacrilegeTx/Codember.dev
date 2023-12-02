import fs from 'node:fs/promises'

let listInvalidPwd = []

const file = await fs
  .readFile('files\\encryption_policies.txt', 'utf-8')
  .catch(err => console.error('Error leyendo el archivo:', err.message))

file.split('\r\n').forEach(element => {
  const [range, letter, password] = element
    .replace(new RegExp(':', 'g'), '')
    .split(' ')
  const [min, max] = range.split('-')

  let ocurrencies = (password.match(new RegExp(letter, 'g')) || []).length
  if (ocurrencies < min || max < ocurrencies) {
    listInvalidPwd.push(password)
  }
})

if (listInvalidPwd.length >= 41) {
  console.log(listInvalidPwd[41])
  console.log(listInvalidPwd[12])
}

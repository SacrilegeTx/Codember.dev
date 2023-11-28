const fs = require('fs')

let listInvalidPwd = []

fs.readFile('files\\encryption_policies.txt', 'utf-8', (err, data) => {
  if (err) throw err

  let listPwd = data.split('\r\n')

  listPwd.forEach(element => {
    const [range, letter, password] = element
      .replace(new RegExp(':', 'g'), '')
      .split(' ')
    const [min, max] = range.split('-')

    let ocurrencies = (password.match(new RegExp(letter, 'g')) || []).length

    if (ocurrencies < min || max < ocurrencies) {
      listInvalidPwd.push(password)
    }
  })

  if (listInvalidPwd.length > 41) {
    console.log(listInvalidPwd[41])
    console.log(listInvalidPwd[12])
  }
})

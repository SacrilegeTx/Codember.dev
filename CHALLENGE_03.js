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

    if (
      (password.match(new RegExp(letter, 'g')) || []).length < min ||
      max > password.trim().length
    ) {
      listInvalidPwd.push(password.trim())
    }
  })

  if (listInvalidPwd.length > 41) {
    console.log(listInvalidPwd[42])
    console.log(listInvalidPwd[13])
  }
})

const fs = require('fs')

const count = arr => arr.reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {})

fs.readFile('files\\message_01.txt', 'utf-8', (err, data) => {
  if (err) throw err

  let listAnimals = data.split(' ')

  let finalString = Object.entries(count(listAnimals)).join('')

  console.log(finalString.replace(new RegExp(',', 'g'), ''))
})

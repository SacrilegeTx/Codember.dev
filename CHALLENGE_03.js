const fs = require('fs')

let listInvalidPwd = []

fs.readFile('files\\encryption_policies.txt', 'utf-8', (err, data) => {
  if (err) throw err

  let listPwd = data.split('\r\n')

  listPwd.forEach(element => {
    let initialArr = element.split(':')
    let len = initialArr[1].trim().length
    let stringToEvaluate = initialArr[1].trim()
    let rulesArr = initialArr[0].split(' ')
    let letterToEvaluate = rulesArr[1]
    let numberOfOcurrences = rulesArr[0].split('-')[0]
    let totalLength = parseInt(rulesArr[0].split('-')[1])

    if (
      (stringToEvaluate.match(new RegExp(letterToEvaluate, 'g')) || [])
        .length != numberOfOcurrences ||
      totalLength != len
    ) {
      listInvalidPwd.push(stringToEvaluate)
    }
  })
  console.log(listInvalidPwd[41])
  console.log(listInvalidPwd[12])
})

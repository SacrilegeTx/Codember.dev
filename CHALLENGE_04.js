const fs = require('fs')

const findDuplicates = arr =>
  Array.from(new Set(arr.filter((value, idx, ar) => idx !== ar.indexOf(value))))

const isSameChecksum = (newChecksum, checksum) => checksum === newChecksum

let realFiles = []

fs.readFile('files\\files_quarantine.txt', 'utf-8', (err, data) => {
  if (err) throw err

  let allFiles = data.split('\r\n')
  
  allFiles.forEach(element => {
    const [filename, checksum] = element.split('-')

    let duplicated = findDuplicates(filename.split('')).join('')

    if (duplicated) {      
      let newChecksum = filename.replace(new RegExp(duplicated, 'g'), '')      
      if (isSameChecksum(newChecksum, checksum)) realFiles.push(checksum)
    } else {
      if (isSameChecksum(filename, checksum)) realFiles.push(checksum)
    }
  })

  console.log(realFiles[32])
})

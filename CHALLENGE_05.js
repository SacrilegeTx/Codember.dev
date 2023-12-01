const fs = require('fs')

const REGEX_ALPHANUMERIC = '^[a-zA-Z0-9]+$'
const REGEX_EMAIL = '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'
const REGEX_NUMERIC = '^[0-9]+$'
const REGEX_STRING = '^[a-zA-Z0-9\x20]+$'

const isAlphanumeric = (str) => str.match(new RegExp(REGEX_ALPHANUMERIC, 'g')) !== null
const isValidEmail = (str) => str.match(new RegExp(REGEX_EMAIL, 'g')) !== null
const isNumeric = (str) => str.match(new RegExp(REGEX_NUMERIC, 'g')) !== null
const isString = (str) => str.match(new RegExp(REGEX_STRING, 'g')) !== null
const inArray = (arr, element) => arr.includes(element)

let invalidUsers = []
let message = ''

/* console.log(isAlphanumeric('O8TsZ7'))
console.log(isAlphanumeric('jauTbB'))
console.log(isValidEmail('jautbb@gmail.com'))
console.log(isNumeric('45'))
console.log(isString('New York')) */

fs.readFile('files\\database_attacked.txt', 'utf-8', (err, data) => {
  if (err) throw err

  const database = data.split('\r\n')//.slice(0, 20)

  database.forEach(row => {
    const [id, username, email, age, location] = row.split(',')

    if (!id || !isAlphanumeric(id)) invalidUsers.push(username)
    if (username && !isAlphanumeric(username) && !inArray(invalidUsers, username)) invalidUsers.push(username)    
    if (!isValidEmail(email) && !inArray(invalidUsers, username)) invalidUsers.push(username)
    if (age && !isNumeric(age) && !inArray(invalidUsers, username)) invalidUsers.push(username)
    if (location && !isString(location) && !inArray(invalidUsers, username)) invalidUsers.push(username)

    
  })

  invalidUsers.forEach(user => message += user.slice(0, 1))

  console.log({message})
})

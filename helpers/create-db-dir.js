const { existsSync, mkdirSync } = require('fs')

const path = './db-data'
if (!existsSync(path)) {
  console.log('creating db-data folder..')
  mkdirSync(path)
  console.log('created!')
} else {
  console.log('db-data folder already exists.')
}


require('dotenv').config({ path: './.env' })
const { loadEnvironments } = require('./webpack-util')
module.exports = function () {
  const envFromDotFile = loadEnvironments('./.env')
  console.log(envFromDotFile)
  Object.assign(envFromDotFile, process.env)
  Object.assign(process.env, envFromDotFile)
  return {
    transpileDependencies: [
      'vuetify'
    ]
  }
}

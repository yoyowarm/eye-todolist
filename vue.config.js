require('dotenv').config({ path: './.env' })
module.exports = function () {
  return {
    transpileDependencies: [
      'vuetify'
    ]
  }
}

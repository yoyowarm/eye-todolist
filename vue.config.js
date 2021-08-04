require('dotenv').config({ path: './.env' })
module.exports = function () {
  return {
    publicPath: '../../',
    transpileDependencies: [
      'vuetify'
    ]
  }
}

const dotenv = require('dotenv')
const fs = require('fs')
exports.loadEnvironments = function loadEnvironments(path, result = {}) {
	const envConfig = dotenv.parse(fs.readFileSync(path))
	Object.assign(result, envConfig)
	return result
};

let libsdl = {
	getLibPath() {
		return __dirname + '/libsdl/' + process.platform + '/' + process.arch + '/libSDL2-2.0.so.0'
	}
}

module.exports = libsdl;

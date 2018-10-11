const ffi = require('ffi');

let libsdl = {
	getLibPath() {
		return __dirname + '/libsdl/' + process.platform + '/' + process.arch + '/libSDL2-2.0' + ffi.LIB_EXT;
	}
}

module.exports = libsdl;

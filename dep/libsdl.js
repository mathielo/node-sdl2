

const exports = {};

exports.getLibPath = () => {
	const libFile = process.platform == 'win32' ? 'SDL2' : 'libSDL2'
	return __dirname + '/libsdl/' + process.platform + '/' + process.arch + '/libSDL2-2.0'
}

export exports;

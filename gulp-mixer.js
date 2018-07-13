const through = require('through2');
const gutil = require('gulp-util');
const path = require('path');

module.exports = function(outname){
	var paths = '';
	paths =  '@import \'variables.scss\'; \n';
	paths =  paths +  '@import \'bootstrap-overrides.scss\'; \n';
	var write = function (file, enc, cb){
		if (file.path != "undefined"){
			if(path.basename(file.path) != 'style.scss' && path.basename(file.path) != '_variables.scss' && path.basename(file.path) != '_bootstrap-overrides.scss'){
				let name = path.basename(file.path).replace(/[_]/g, '');
				paths =  paths + '\n' + '@import \'' + name + '\';';
			}
		}
		cb();
	};

	var flush = function(cb){
		gutil.log(gutil.colors.cyan(paths));

		var newFile = new gutil.File({
			path: __dirname + '/' + outname,
			contents: Buffer.from(paths)
		});

		this.push(newFile);
		cb();
	};
	return through.obj(write, flush);
};
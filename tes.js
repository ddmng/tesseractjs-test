#!/usr/bin/node
var Tesseract = require('tesseract.js')
var fs = require('fs');
var path = require("path");

var p = "./files"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
				detectAndRecognize(p + '/' + file);
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});

function detectAndRecognize(f) {
	Tesseract.detect(f)
		.progress(function(info){
			process.stdout.write("Detection: " + (info.progress*100) + '   \r')
		})
		.catch(function(err){
			console.log('err', err)
		})
		.then(function(data){
			console.log('\r                                    \n\nDetection done', data)
		})

	Tesseract.recognize(f)
	  .progress(function(message){
			process.stdout.write("Recognition " + (message.progress*100) + '   \r')
		})
		.catch(function(err){
			console.log('err: ', err)
		})
		.then(function(message){
			console.log('\r                                    \n\nMessage is: \n', message.text)
	})
}

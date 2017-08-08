var fs = require('fs');
var length = 0;
var fileName = "sample.txt";
var readStream = fs.createReadStream(fileName);

var currentSentence = "";
var largestSentence = "";

readStream.on("data", function(blob) {
	var bStr = blob.toString();
	for (var i=0; i<bStr.length; i++) {

		var c = bStr.charAt(i);
		currentSentence += c;
		
		if (c == '.' || c == '!' || c == '?') {
			// End current sentence -- compare with the current largest
			if (largestSentence.length < currentSentence.length) {
				largestSentence = currentSentence;
			}
			currentSentence = "";
		}
	}
} );

readStream.on("end", function() {
	console.log("Largest sentence: " + largestSentence);
} );

readStream.on("error", function() {
	console.log("Error occurred when reading from file " +fileName);
} );

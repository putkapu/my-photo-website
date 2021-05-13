var fs = require('fs');
var files = fs.readdirSync('photos/');

console.log(photos);

var num_of_photos = 37;
var backup_photos = Array.from({length: num_of_photos}, (x, i) => i+1);
var photos =  [].concat(backup_photos);

function removeElement(array, value) {
	const index = array.indexOf(value);
	array.splice(index, 1);
};

function changeImage() {
	document.getElementById("1").src = ``;

	if (photos.length == 0) {
		photos = [].concat(backup_photos);
	};

	var n = photos[Math.floor(Math.random()*photos.length)];
	removeElement(photos, n);
	document.getElementById("1").src = `photos/${n}.jpg`;
};
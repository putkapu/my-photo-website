var num_of_photos = 42;
var backup_photos = Array.from({length: num_of_photos}, (x, i) => i+1);
var photos =  [].concat(backup_photos);

function removeElement(array, value) {
	const index = array.indexOf(value);
	array.splice(index, 1);
};

function changeImage() {
	document.getElementById("slideshow").src = ``;

	if (photos.length == 0) {
		photos = [].concat(backup_photos);
	};

	var n = photos[Math.floor(Math.random()*photos.length)];
	removeElement(photos, n);
	console.log(`photo ${n} chosen`);
	document.getElementById("slideshow").src = `photos/${n}.jpg`;
};
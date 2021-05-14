var num_of_photos = 42;
var backup_photos = Array.from({length: num_of_photos}, (x, i) => i+1);
var photos =  [].concat(backup_photos);
var round = 1;
removeElement(photos, 1); // remove cover photo from first round

function removeElement(array, value) {
	const index = array.indexOf(value);
	array.splice(index, 1);
};

function changeImage() {
	document.getElementById("slideshow").src = ``;

	if (photos.length == 0) {
		photos = [].concat(backup_photos);
		console.log(`round ${round} completed`);
		round += 1;
	};

	var photo_number = photos[Math.floor(Math.random()*photos.length)];
	removeElement(photos, photo_number);
	console.log(`photo ${photo_number} chosen`);
	document.getElementById("slideshow").src = `photos/${photo_number}.jpg`;
};
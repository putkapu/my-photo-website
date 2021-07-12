var num_of_photos = 42;
var backup_photos = Array.from({length: num_of_photos}, (x, i) => i+1);
var photos =  [].concat(backup_photos);
var round = 1;
removeElement(photos, 1); // remove cover photo from first round

function removeElement(array, value) {
	const index = array.indexOf(value);
	array.splice(index, 1);
};

function changeImageWeb() {
	document.getElementById("slideshow-web").src = ``;

	if (photos.length == 0) {
		photos = [].concat(backup_photos);
		console.log(`round ${round} completed`);
		round += 1;
	};

	var photo_number = photos[Math.floor(Math.random()*photos.length)];
	removeElement(photos, photo_number);
	console.log(`photo ${photo_number} chosen`);
	document.getElementById("slideshow-web").src = `photos/${photo_number}.jpg`;
};

function changeImageMobile() {
	document.getElementById("slideshow-mobile").src = ``;

	if (photos.length == 0) {
		photos = [].concat(backup_photos);
		console.log(`round ${round} completed`);
		round += 1;
	};

	var photo_number = photos[Math.floor(Math.random()*photos.length)];
	removeElement(photos, photo_number);
	console.log(`photo ${photo_number} chosen`);
	document.getElementById("slideshow-mobile").src = `photos/${photo_number}.jpg`;
};

function stopAnimation() {
	var element = document.getElementById("aboutHeader");
	if (!element.classList.contains('paused'))
    {
        element.classList.add('paused');
        // element.style.property.animationPlayState = "paused";
    }
};
const photoNames = [
	1, 6, 39,
    2,  11, 12,
    46, 24, 19,
    10, 30, 31,
    15, 16, 17
    ];

// 2

const photoGrid = document.getElementById('photoGrid');

// Generate photo elements dynamically
photoNames.forEach(photoName => {
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo-container');

  const photo = document.createElement('img');
  photo.classList.add('photo');
  photo.src = `photos/${photoName}.jpg`;
  photo.alt = "";

  photo.addEventListener('click', toggleFullscreen);

  photoContainer.appendChild(photo);
  photoGrid.appendChild(photoContainer);
});

// Toggle fullscreen mode
function toggleFullscreen() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modalImage.src = this.src;
    modalImage.alt = this.alt;
  
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
  
    modal.addEventListener('click', closeModal);
  }
  
  // Close the modal
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.remove();
  }

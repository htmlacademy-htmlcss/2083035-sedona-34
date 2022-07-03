const hotelsSearchLink = document.querySelector('.hotels-search-link');
const modalCloseButton = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

hotelsSearchLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});

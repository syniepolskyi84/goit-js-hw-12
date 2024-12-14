export function reflectionPictures(pictures) {
  return pictures.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <a class="gallery-item" href="${largeImageURL}">
      <div class="all-gallery">
        <img src="${webformatURL}" alt="${tags}">
        <div class="description">
          <p>Likes: <span>${likes}</span></p>
          <p>Views: <span>${views}</span></p>
          <p>Comments: <span>${comments}</span></p>
          <p>Downloads: <span>${downloads}</span></p>
        </div>
      </div>
    </a>
  `).join("");
}

export function clearGallery(galleryElement) {
  galleryElement.innerHTML = "";
}

export function showLoader(loaderElement) {
  loaderElement.style.display = "block";
}

export function hideLoader(loaderElement) {
  loaderElement.style.display = "none";
}

export function showLoadMoreButton(buttonElement) {
  buttonElement.style.display = "block";
}

export function hideLoadMoreButton(buttonElement) {
  buttonElement.style.display = "none";
}

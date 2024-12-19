const lightbox = document.querySelector('.lightbox');
const mainImage = document.querySelector('.mainImg');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxMain = document.querySelector('.lightboxMain');
const lightboxThumbs = document.querySelectorAll('.thumbSlides img');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

mainImage.addEventListener('click', () => {
    lightbox.style.display = 'block';
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

let currentIndex = 0;

function updateLightboxImg(index) {
    const thumbImage = lightboxThumbs[index];
    lightboxMain.src = thumbImage.src.replace("-thumbnail", "");
}

updateLightboxImg(currentIndex);

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + lightboxThumbs.length) % lightboxThumbs.length;
    updateLightboxImg(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % lightboxThumbs.length;  
    updateLightboxImg(currentIndex);
})

console.log(lightboxMain.src);
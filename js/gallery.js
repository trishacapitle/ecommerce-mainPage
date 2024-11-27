
const mainImage = document.querySelector(".mainImg");
const thumbnails = document.querySelectorAll(".thumbnail");


thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
    const thumbnailImage = thumbnail.querySelector("img");
    mainImage.src = thumbnailImage.src.replace("-thumbnail", "");

    thumbnails.forEach((thumb) => thumb.classList.remove("active"));

    thumbnail.classList.add("active");
    });
});
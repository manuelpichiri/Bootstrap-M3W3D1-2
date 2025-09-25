var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centerSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const bookmark = document.querySelector(".bookmark-custom");
const bookmarks = document.querySelectorAll(".bi-bookmark");
const cards = document.querySelectorAll(".swiper-slide .bg-light");
const cardsImg = document.querySelectorAll(".bg-light img");

function addClassCard() {
  cards.forEach((card) => {
    card.classList.add("card-element");
  });
}

function bookmarkFill(bookmarks) {
  bookmarks.addEventListener("mouseenter", () => {
    bookmarks.classList.replace("bi-bookmark", "bi-bookmark-fill");
  });
}

function bookmarkEmpty(bookmarks) {
  bookmarks.addEventListener("mouseleave", () => {
    bookmarks.classList.replace("bi-bookmark-fill", "bi-bookmark");
  });
}

function addClassCardImg() {
  cardsImg.forEach((cardImg) => {
    cardImg.classList.add("rounded-2");
  });
}

function allBookmark() {
  bookmarks.forEach((bookmark) => {
    bookmarkFill(bookmark);
    bookmarkEmpty(bookmark);
  });
}

addClassCard();
addClassCardImg();
allBookmark();

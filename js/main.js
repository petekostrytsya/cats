// const title = document.querySelector(".cats-title");

// const logotype = document.querySelector(".site-logo img");
// const body = document.querySelector("body");
// console.log(logotype);

// function onLogoClick() {
//   body.style.backgroundColor = "teal";
// }

// title.addEventListener("click", onLogoClick);




const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 500
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

AOS.init();

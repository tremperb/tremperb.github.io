// Nav bar struck attr
const observer = new IntersectionObserver(
([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
{threshold: [1]}
);

observer.observe(document.querySelector('nav'));


// Image carousels
function getCarousel(id) {
  return document.getElementById(id);
}

function renderCarousel(container, n) {
  if (!container) return;

  const slides = container.querySelectorAll("img.mySlides");
  const dots = container.querySelectorAll(".demo");
  if (!slides.length) return;

  n = Number(n);
  if (!Number.isFinite(n)) n = 1;

  let idx = Number(container.dataset.slideIndex || "1");
  if (!Number.isFinite(idx)) idx = 1;

  if (n > slides.length) idx = 1;
  else if (n < 1) idx = slides.length;
  else idx = n;

  container.dataset.slideIndex = String(idx);

  slides.forEach(s => (s.style.display = "none"));
  dots.forEach(d => d.classList.remove("w3-white"));

  slides[idx - 1].style.display = "block";
  if (dots[idx - 1]) dots[idx - 1].classList.add("w3-white");
}

window.plusDivs = function (carouselId, delta) {
  const c = getCarousel(carouselId);
  delta = Number(delta);
  if (!Number.isFinite(delta)) delta = 1;

  const current = Number(c?.dataset.slideIndex || "1");
  renderCarousel(c, current + delta);
};

window.currentDiv = function (carouselId, n) {
  renderCarousel(getCarousel(carouselId), n);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".w3-display-container[id^='carousel-']").forEach(c => {
    c.dataset.slideIndex = "1";
    renderCarousel(c, 1);
  });
});

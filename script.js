
// スライドショー

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".slide-arrow.prev");
const nextButton = document.querySelector(".slide-arrow.next");

let currentSlide = 0;
let timer;

// 表示する画像の切り替え

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

// 5秒ごとの自動切り替え

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

// 前の画像へ

prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  startTimer();
});

// 次の画像へ

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  startTimer();
});

// 丸ボタンで画像を選択

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    startTimer();
  });
});

// スライドショー開始

showSlide(0);
startTimer();

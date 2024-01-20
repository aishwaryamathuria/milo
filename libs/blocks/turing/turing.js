export default function init(el) {
el.innerHTML = `<div class="carousel-container"><div class="carousel_items"><div class="carousel_item item1"><p class="carousel_text">Image 1</p></div><div class="carousel_item item2"><p class="carousel_text">Image 2</p></div><div class="carousel_item item3"><p class="carousel_text">Image 3</p></div><div class="carousel_item item4"><p class="carousel_text">Image 4</p></div><div class="carousel_item item5"><p class="carousel_text">Image 5</p></div></div></div>`;
const carouselItems = document.querySelectorAll(".carousel_item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// It will be used to shift the items  by incrementing its
// value every 2 seconds and multiplying it by 100
let i = 1;

// Running the condition every 2 seconds using setInterval
setInterval(() => {
  // Accessing All the carousel Items
  Array.from(carouselItems).forEach((item, index) => {
    // Checking if the value of i is less than the
    // number of carousel items, if it is true,
    // move all the carousel items 100% towards left
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  // If the the value of i is less than the number of
  // Carousel items, then increment the value of i by 1
  // Otherwise set the value of i to 0 if it becomes greater
  // than the number of carousel items
  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 2000);
}

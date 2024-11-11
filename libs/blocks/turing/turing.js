function genKeywords() {
  if (!window.turing) return;
  const c = document.querySelector('main .section').innerText;
  const options = {
  method: 'POST',
  headers: {
    'x-api-key': window.turing.firefall.x-api-key,
    'x-gw-ims-org-id': window.turing.firefall.x-gw-ims-org-id,
    'Authorization': window.turing.firefall.Authorization,
    'Content-Type': 'application/json'
  },
  body: `{"messages":[{"role":"user","content":"Generate 1 keyword for following text - ${c}"}],"llm_metadata":{"model_name":"gpt-4","llm_type":"azure_chat_openai","temperature":0.7,"max_tokens":256,"top_p":1,"frequency_penalty":0,"presence_penalty":0,"n":1,"stop":["\n","  ","\t"]}}`
};

fetch('https://firefall-stage.adobe.io/v1/chat/completions', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
export default async function init(el) {
genKeywords();
el.innerHTML = `<div class="carousel-container"><div class="carousel_items"></div></div>`;
const options = {method: 'GET', headers: {'x-api-key': 'alfred-stage'}};
const rawImgJson = await fetch('https://cc-api-cp-stage.adobe.io/api/v2/ff_community/assets?sort=date_desc&size=10', options);
const imgJson = await rawImgJson.json();
const imgList = [];
imgJson._embedded.assets.forEach((i) => {
  let aw = i._embedded.artwork._links.rendition.href;
  console.log(aw)
  aw = aw.replace("{format}", "png");
  aw = aw.replace("{dimension}", "width");
  aw = aw.replace("{size}", "400");
  imgList.push(aw);
});
const x = document.querySelector(".carousel_items");
for (let j = 0; j<=10; j++) {
  imgList.forEach((img, i) => {
    x.innerHTML = x.innerHTML + `<div class="carousel_item item${i+1}"> <p class="carousel_text">Image ${i+1}</p> </div>`;
    const tmp = x.querySelector('div:last-child');
    tmp.style.backgroundImage = `url("${imgList[i]}")`;
  });
}
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

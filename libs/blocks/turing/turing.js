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
export default function init(el) {
genKeywords();
el.innerHTML = `<div class="carousel-container"><div class="carousel_items"></div></div>`;
const imgList = ['https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=519&q=80',
          'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8QUl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          'https://images.unsplash.com/photo-1673901736622-c3f06b08511f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
          ]
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
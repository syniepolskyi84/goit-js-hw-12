/* empty css                      */import{a as S,S as q,i as s}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();let f=1;const v=15,E="https://pixabay.com/api/",P="47437973-d70be85f5be71cfd9f8f29695";async function h(e){try{const t=await S(E,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:f,per_page:v}});return console.log(t.data),t.data}catch(t){throw console.error("Error fetching pictures:",t.message),new Error("Failed to fetch pictures")}}async function R(){f+=1}async function M(){f=1}function g(e){return e.map(({webformatURL:t,largeImageURL:i,tags:l,likes:r,views:o,comments:a,downloads:b})=>`
    <a class="gallery-item" href="${i}">
      <div class="all-gallery">
        <img src="${t}" alt="${l}">
        <div class="description">
          <p>Likes: <span>${r}</span></p>
          <p>Views: <span>${o}</span></p>
          <p>Comments: <span>${a}</span></p>
          <p>Downloads: <span>${b}</span></p>
        </div>
      </div>
    </a>
  `).join("")}function H(e){e.innerHTML=""}function y(e){e.style.display="block"}function m(e){e.style.display="none"}function $(e){e.style.display="block"}function u(e){e.style.display="none"}const L=document.querySelector(".form-search"),p=document.querySelector(".gallery"),d=document.querySelector(".loader"),n=document.querySelector(".js-load-more");let w=new q(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});L.addEventListener("submit",O);n.addEventListener("click",B);let c=0;async function O(e){e.preventDefault();const t=e.target.elements.query.value.trim();if(!t){s.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}H(p),y(d),M(),c=0;try{const i=await h(t);if(!i.hits.length){s.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p.innerHTML=g(i.hits),w.refresh(),c+=i.hits.length,c>=i.totalHits?(u(n),s.info({message:"You've reached the end of search results.",position:"topRight"})):$(n)}catch{s.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),u(n)}finally{m(d)}}async function B(){y(d);try{await R();const e=L.elements.query.value.trim();if(!e){s.error({title:"Error",message:"Search query is empty!",position:"topRight"});return}const t=await h(e);if(c+=t.hits.length,c>=t.totalHits){u(n),s.info({message:"You've reached the end of search results.",position:"topRight"});return}p.insertAdjacentHTML("beforeend",g(t.hits)),w.refresh();const i=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:i*1.2,behavior:"smooth"})}catch{s.error({title:"Error",message:"Error fetching more images!",position:"topRight"}),u(n)}finally{m(d)}}
//# sourceMappingURL=index.js.map
import{S as f,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="45505943-42661f72ea61112ff146e0896",g="https://pixabay.com/api/";function h(s){const r=`${g}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(t=>{if(!t.ok)throw new Error("HTTP error! status: "+t.status);return t.json()}).then(t=>t.hits)}let m=new f(".gallery a");function a(s){const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0)return;const t=s.map(n=>`
            <a href="${n.largeImageURL}" class="gallery-item">
                <img src="${n.webformatURL}" alt="${n.tags}" />
                <ul class="info">
                    <li class="gallery-info-item">
                        <strong>Likes</strong>
                        <span>${n.likes}</span>
                    </li>
                    <li class="gallery-info-item">
                        <strong>Views</strong>
                        <span>${n.views}</span>
                    </li>
                    <li class="gallery-info-item">
                        <strong>Comments</strong>
                        <span>${n.comments}</span>
                    </li>
                    <li class="gallery-info-item">
                        <strong>Downloads</strong>
                        <span>${n.downloads}</span>
                    </li>
                </ul>
            </a>
        `).join("");r.insertAdjacentHTML("beforeend",t),m.refresh()}function l(s){u.error({title:"Error",message:s,position:"topRight"})}function p(){u.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function y(){document.querySelector(".loading-indicator").classList.remove("hidden")}function c(){document.querySelector(".loading-indicator").classList.add("hidden")}const L=document.querySelector("#search-form"),w=document.querySelector("#search-input");L.addEventListener("submit",s=>{s.preventDefault();const r=w.value.trim();if(!r){l("Please enter a search query.");return}y(),h(r).then(t=>{c(),t.length===0?(a([]),p()):a(t)}).catch(t=>{c(),l("An error occurred while fetching images. Please try again later.")})});
//# sourceMappingURL=commonHelpers.js.map

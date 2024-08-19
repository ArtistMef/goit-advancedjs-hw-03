import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="45505943-42661f72ea61112ff146e0896",f="https://pixabay.com/api/";function g(n){const r=`${f}?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(t=>{if(!t.ok)throw new Error("HTTP error! status: "+t.status);return t.json()}).then(t=>t.hits)}function m(n){const r=document.querySelector(".gallery");r.innerHTML="";const t=n.map(e=>`
            <a href="${e.largeImageURL}" class="gallery-item">
                <img src="${e.webformatURL}" alt="${e.tags}" />
                <ul class="info">
                    <li class="gallery-info-item">
                        <strong>Likes</strong>
                        <span>${e.likes}</span>
                    </li>
                    <li class="gallery-info-item">
                        <strong>Views</strong>
                        <span>${e.views}</span>
                    </li>
                    <li class="gallery-info-item">
                        <strong>Comments</strong>
                        <span>${e.comments}</span>
                    </li>
                    <li class="gallery-info-item">
                        <strong>Downloads</strong>
                        <span>${e.downloads}</span>
                    </li>
                </ul>
            </a>
        `).join("");r.insertAdjacentHTML("beforeend",t),new u(".gallery a").refresh()}function a(n){l.error({title:"Error",message:n,position:"topRight"})}function h(){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function p(){document.querySelector(".loading-indicator").classList.remove("hidden")}function c(){document.querySelector(".loading-indicator").classList.add("hidden")}const y=document.querySelector("#search-form"),L=document.querySelector("#search-input");y.addEventListener("submit",n=>{n.preventDefault();const r=L.value.trim();if(!r){a("Please enter a search query.");return}p(),g(r).then(t=>{c(),t.length===0?h():m(t)}).catch(t=>{c(),a("An error occurred while fetching images. Please try again later.")})});
//# sourceMappingURL=commonHelpers.js.map

(()=>{"use strict";const e=document.querySelectorAll(".dropdown"),t=document.querySelectorAll(".btn-popup"),n=document.querySelector(".popup__btn-close"),o=document.getElementById("popup"),l=document.getElementById("shadow"),d=document.getElementById("modal"),s=e=>e.preventDefault(),c=document.querySelector(".header").querySelector(".header__menu"),r=document.getElementById("modal").querySelector(".modal__btn-close");c.addEventListener("click",(()=>{d.style.top="0px",d.style.zIndex="10",l.style.opacity=".8",l.style.zIndex="3",document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("wheel",s,{passive:!1})})),r.addEventListener("click",(()=>{l.style.opacity="0",l.style.zIndex="-10",d.style.top="-580px",document.removeEventListener("touchmove",s),document.removeEventListener("wheel",s)})),document.getElementById("shadow").addEventListener("click",(e=>{e.composedPath().includes(d)||(d.style.top="-580px",l.style.opacity="0",l.style.zIndex="-10",document.removeEventListener("wheel",s),document.removeEventListener("touchmove",s))})),e.forEach((e=>{let t=e.querySelector(".dropdown__title"),n=e.querySelectorAll(".dropdown__label");t.addEventListener("click",(()=>{if("active"===e.getAttribute("data-state"))e.setAttribute("data-state","");else{e.setAttribute("data-state","active");for(let e=0;e<n.length;e++)if(t.textContent===n[e].textContent){n[e].setAttribute("id","block"),document.getElementById("block").style.display="none",n[e].removeAttribute("id");break}}}));for(let o=0;o<n.length;o++)n[o].addEventListener("click",(o=>{t.textContent=o.target.textContent,e.setAttribute("data-state","");for(let e=0;e<n.length;e++)n[e].setAttribute("id","block"),document.getElementById("block").style.display="block",n[e].removeAttribute("id")}));document.addEventListener("click",(t=>{t.composedPath().includes(e)||e.setAttribute("data-state","")}))}));const i=document.querySelectorAll(".socials__link");for(let e=1;e<i.length;e++)1===e&&(i[e].addEventListener("mouseover",(()=>{document.querySelector(".socials").setAttribute("data-state","circle-grey")})),i[e].addEventListener("mouseout",(()=>{document.querySelector(".socials").setAttribute("data-state","circle-red")}))),2===e&&(i[e].addEventListener("mouseover",(()=>{document.querySelector(".socials").setAttribute("data-state","circle-grey-reverse")})),i[e].addEventListener("mouseout",(()=>{document.querySelector(".socials").setAttribute("data-state","circle-red")})));for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{o.style.visibility="visible",o.style.transform="scale(1)",l.style.opacity=".8",l.style.zIndex="3",document.addEventListener("wheel",s,{passive:!1})}));n.addEventListener("click",(()=>{o.style.visibility="hidden",o.style.transform="scale(0)",l.style.opacity="0",l.style.zIndex="-10",document.removeEventListener("wheel",s)})),document.getElementById("shadow").addEventListener("click",(e=>{e.composedPath().includes(o)||(o.style.visibility="hidden",o.style.transform="scale(0)",l.style.opacity="0",l.style.zIndex="-10",document.removeEventListener("wheel",s))}))})();
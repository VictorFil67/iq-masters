(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();document.querySelector(".burger").addEventListener("click",u);document.querySelector("ul").addEventListener("click",l);document.querySelector(".hidden").addEventListener("click",d);function l(t){if(t.target.nodeName==="A"){const r=t.target.getAttribute("href").substring(t.target.getAttribute("href").indexOf("#"));console.log(r);const c=document.querySelectorAll("section");console.log(c),c.forEach(e=>e.classList.remove("shift")),document.querySelector(r).classList.add("shift"),console.log(document.querySelector(r));const n=document.querySelectorAll("section");console.log(n),window.innerWidth<1440&&i()}}function d(t){console.log(t.target,t.currentTarget),t.target===t.currentTarget&&i()}function u(){document.querySelector(".burger").classList.toggle("active"),document.querySelector(".nav").classList.toggle("open"),document.querySelector(".hidden").classList.toggle("backdrop"),document.querySelector("body").classList.toggle("hidding")}function i(){document.querySelector(".burger").classList.remove("active"),document.querySelector(".nav").classList.remove("open"),document.querySelector(".hidden").classList.remove("backdrop"),document.querySelector("body").classList.remove("hidding");const t=window.location.href;t.includes("#")&&console.log(t)}window.addEventListener("scroll",()=>{const t=document.querySelector(".header");window.scrollY>50?t.classList.add("blurred"):t.classList.remove("blurred")});
//# sourceMappingURL=mobail-abfb5c52.js.map

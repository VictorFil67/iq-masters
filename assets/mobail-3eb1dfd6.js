(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();document.querySelector(".burger").addEventListener("click",u);document.querySelector("ul").addEventListener("click",l);document.querySelector(".hidden").addEventListener("click",d);function l(t){console.log(t.target,t.target.nodeName),t.target.nodeName==="A"&&window.innerWidth<1440&&i()}function d(t){console.log(t.target,t.currentTarget),t.target===t.currentTarget&&i()}function u(){document.querySelector(".burger").classList.toggle("active"),document.querySelector(".nav").classList.toggle("open"),document.querySelector(".hidden").classList.toggle("backdrop"),document.querySelector("body").classList.toggle("hidding");const t=window.location.href;console.log(t)}function i(){document.querySelector(".burger").classList.remove("active"),document.querySelector(".nav").classList.remove("open"),document.querySelector(".hidden").classList.remove("backdrop"),document.querySelector("body").classList.remove("hidding")}
//# sourceMappingURL=mobail-3eb1dfd6.js.map
"use strict";const ibg=()=>{const e=$(".ibg");let t=Object.keys(e);for(let o=0;o<t.length-2;o++){const t=$(e[o]).children("img"),n=$(t).attr("src");$(e[o]).attr("style",`background-image: url(${n})`),$(t).remove()}e.map((e=>{}))};$(document).ready((()=>{$(window).scrollTop()>0&&$(".header").addClass("scroll"),$(window).scroll((function(){0==$(window).scrollTop()?($(".header").removeClass("scroll"),$(".menu").removeClass("scroll")):($(".header").addClass("scroll"),$(".menu").addClass("scroll"))})),ibg();const e=document.querySelector(".menu-icons"),t=document.querySelector("body");if(e){const o=document.querySelector(".menu__body");e.addEventListener("click",(function(n){e.classList.toggle("active"),o.classList.toggle("active"),t.classList.toggle("lock")}))}$(".user-actions__search-icon").click((()=>{$(".search").toggleClass("active")}));const o=document.querySelectorAll(".anim-items");if(o.length>0){function n(){for(let e=0;e<o.length;e++){const t=o[e],n=t.offsetHeight,c=s(t).top,l=4;let i=window.innerHeight-n/l;n>window.innerHeight&&(i=window.innerHeight-window.innerHeight/l),pageYOffset>c-i&&pageYOffset<c+n?t.classList.add("active"):t.classList.contains("anim-no-hide")&&t.classList.remove("active")}}function s(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",n),n()}}));